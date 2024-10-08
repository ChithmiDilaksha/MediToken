
class Node {
    constructor(patient) {
        this.patient = patient;
        this.next = null;
    }
}

class Patient {
    constructor() {
        this.name = '';
        this.age = '';
        this.address = '';
        this.email = '';
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setAddress(address) {
        this.address = address;
    }

    setEmail(email) {
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getAddress() {
        return this.address;
    }

    getEmail() {
        return this.email;
    }

    getPatient() {
        return [this.name, this.age, this.address, this.email];
    }
}

class Hospital {
    constructor() {
        this.front = null;
        this.rear = null;
        this.loadFromCookies();
    }

    isEmpty() {
        return this.front === null && this.rear === null;
    }

    addPatient(patient) {
        let count = 1;
        const newNode = new Node(patient);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            let temp = this.front;
            while (temp !== null) {
                count++;
                temp = temp.next;
            }
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.saveToCookies();
        this.sendEmail(patient, count);
    }

    sendEmail(patient, queueNumber)
    {
        const templateParams = {
            name: patient[0],
            to_email: patient[3],
            patientNumber: queueNumber
        };

        emailjs.send('service_cgu4bze', 'template_swr0g5r', templateParams).then((response) => {
            console.log('Email sent!', response.status, response.text);
        }, (error) => {
            console.error('Error sending email:', error);
        });
    }

    /*removePatient() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            this.front = this.front.next;
            if (this.front === null) {
                this.rear = null;
            }
            this.saveToCookies();
        }
    }*/

        removePatient(index) {
            if (this.isEmpty()) {
                console.log("Queue is empty");
                return;
            }
    
            if (index < 0) {
                console.log("Invalid index");
                return;
            }
    
            let temp = this.front;
            let prev = null;
            let count = 0;
    
            if (index === 0) {
                this.front = temp.next;
                if (this.front === null) {
                    this.rear = null;
                }
            } else {
                while (temp !== null && count < index) {
                    prev = temp;
                    temp = temp.next;
                    count++;
                }
    
                if (temp === null) {
                    console.log("Index out of bounds");
                    return;
                }
    
                prev.next = temp.next;
                if (temp.next === null) {
                    this.rear = prev;
                }
            }
            this.saveToCookies();
            this.display();
        }    

    display() {
        const patientList = document.getElementById('patientList');
        patientList.innerHTML = '';

        if (this.isEmpty()) {
            patientList.innerHTML = '<p>Patients are empty</p>';
        } else {
            let count = 0;
            let temp = this.front;
            while (temp !== null) {
                const patientDiv = document.createElement('div');
                patientDiv.classList.add('mb-4', 'p-4', 'bg-gray-100', 'rounded', 'shadow');
                patientDiv.innerHTML = `
                    <h4 class="text-lg font-semibold">Patient ${++count}</h4>
                    <p><strong>Name:</strong> ${temp.patient[0]}</p>
                    <p><strong>Age:</strong> ${temp.patient[1]}</p>
                    <p><strong>Address:</strong> ${temp.patient[2]}</p>
                    <p><strong>Email:</strong> ${temp.patient[3]}</p>
                    <button class="remove-btn" data-index="${count - 1}">Remove</button>
                `;
                patientList.appendChild(patientDiv);
                temp = temp.next;
            }
             // Add event listeners to remove buttons
             document.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const index = parseInt(event.target.getAttribute('data-index'));
                    this.removePatient(index);
                });
            });
        }
    }

    saveToCookies() {
        let patients = [];
        let temp = this.front;
        while (temp !== null) {
            patients.push(temp.patient);
            temp = temp.next;
        }
        document.cookie = `hospitalQueue=${JSON.stringify(patients)}; path=/;`;
    }

    loadFromCookies() {
        const cookies = document.cookie.split('; ').find(row => row.startsWith('hospitalQueue='));
        if (cookies) {
            const patients = JSON.parse(cookies.split('=')[1]);
            patients.forEach(patientData => {
                this.addPatient(patientData);
            });
        }
    }

    displayCount() {
        const patientList = document.getElementById('patientList');
        patientList.innerHTML = '';

        if (this.isEmpty()) {
            patientList.innerHTML = '<p>Patients are empty</p>';
        } else {
            let count = 0;
            let temp = this.front;
            while (temp !== null) {
                temp = temp.next;
                count++;
            }
            const patientDiv = document.createElement('div');
            patientDiv.classList.add('mb-4', 'p-4', 'bg-gray-100', 'rounded', 'shadow');
            patientDiv.innerHTML = `
                    <h4 class="text-lg font-semibold">Patient ${count} added</h4>
                `;
                patientList.appendChild(patientDiv);

        }
    }


}

const hospital = new Hospital();

document.addEventListener("DOMContentLoaded", function() {
    fetch("HTML/Manage.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;

            document.getElementById('patientForm').addEventListener('submit', function(event) {
                event.preventDefault();

                const patient = new Patient();
                patient.setName(document.getElementById('name').value);
                patient.setAge(document.getElementById('age').value);
                patient.setAddress(document.getElementById('address').value);
                patient.setEmail(document.getElementById('email').value);

                hospital.addPatient(patient.getPatient());
                hospital.display();

                document.getElementById('patientForm').reset();
            });

            hospital.display();
        })
        .catch(error => console.error('Error loading Manage.html:', error));
});
