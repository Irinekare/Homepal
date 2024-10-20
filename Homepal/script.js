document.addEventListener('DOMContentLoaded', () => {
    console.log('HomePal platform loaded');

    // Handle patient health data submission
    const healthForm = document.getElementById('health-form');
    if (healthForm) {
        healthForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const bp = document.getElementById('bp').value;
            const glucose = document.getElementById('glucose').value;

            // Display recent health data (for demonstration purposes)
            const dataDisplay = document.getElementById('data-display');
            dataDisplay.innerHTML += `<p>Blood Pressure: ${bp}, Glucose Level: ${glucose}</p>`;

            // Reset form fields
            healthForm.reset();
        });
    }

    // Handle appointment scheduling
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const appointmentDate = document.getElementById('appointment-date').value;
            alert(`Appointment scheduled for ${appointmentDate}`);
            appointmentForm.reset();
        });
    }

    // (Doctor Dashboard) Handle appointment status updates
    const appointmentManagementForm = document.getElementById('appointment-management-form');
    if (appointmentManagementForm) {
        appointmentManagementForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const patientName = document.getElementById('patient-name').value;
            const status = document.getElementById('appointment-status').value;
            alert(`Updated appointment status for ${patientName} to ${status}`);
            appointmentManagementForm.reset();
        });
    }

    // (Caregiver Dashboard) Handle task updates
    const taskManagementForm = document.getElementById('task-management-form');
    if (taskManagementForm) {
        taskManagementForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const taskDescription = document.getElementById('task-description').value;
            const taskStatus = document.getElementById('task-status').value;
            alert(`Task: "${taskDescription}" marked as ${taskStatus}`);
            taskManagementForm.reset();
        });
    }
});
