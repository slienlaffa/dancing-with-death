const uri = 'api/appointments'
const errorHtml = document.getElementById("error");

document.addEventListener("DOMContentLoaded", function () {
    getData();
});

function addItem() {
    errorHtml.innerHTML = '';
    const formData = {
        'DateAppointment': document.getElementsByName('DateAppointment')[0].value,
        'StartTime': [...document.getElementsByName('StartTime')].find(r => r.checked).value,
        'Email': document.getElementsByName('Email')[0].value || undefined,
        'PhoneNumber': document.getElementsByName('PhoneNumber')[0].value || undefined,
    }
    console.log(formData);
    axios.post(uri, formData)
    .then(function (response) {
        console.log(response);
        getData();
    })
    .catch(function (error) {
        errorHtml.innerHTML = error.response.data;
    });
}

async function getData() {
    errorHtml.innerHTML = '';
    const table_body = document.getElementById("todos");
    table_body.innerHTML = '';
    try {
        const response = await axios.get(uri);
        for(let item of response.data){
            let tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${new Date(item.dateAppointment).toLocaleDateString()}</td>
                <td>${item.startTime}:00</td>
                <td>${item.email ? item.email : '' }</td>
                <td>${item.phoneNumber ? item.phoneNumber : ''}</td>
                <td></td>
            `;
            table_body.appendChild(tr);
        }
    } catch (error) {
        errorHtml.innerHTML = error.response.data;
    }
}

async function fetchAvailableHours(e) {
    errorHtml.innerHTML = '';
    try {
        const response = await axios.get(uri + '/getAvailableHours/' + e.target.value);
        const radios = document.getElementById("radios");
        radios.innerHTML = '';
        let dataRadios = '';
        if (response.data.length === 0) dataRadios = "All hours are already booked";
        else {
            for (let item of response.data){
                dataRadios += `<label class="radio"><input class="radio" type="radio" value="${item}" name="StartTime" required> At ${item}:00</label>`;
            }
        }
        radios.innerHTML= dataRadios;
    } catch (error) {
        errorHtml.innerHTML = error.response.data;
    }
}