function register(){
    let table = document.getElementById("myTable");
    let row = table.insertRow(2);
    let firstName = row.insertCell(0);
    let lastName = row.insertCell(1);
    let ssNumber = row.insertCell(2);
    firstName.innerHTML = document.getElementById("ipFirstName").value;
    lastName.innerHTML = document.getElementById("ipLastName").value;
    ssNumber.innerHTML = document.getElementById("ipSsn").value; 
    tbReset();
};

function tbReset(){
    document.getElementById("ipFirstName").value = "";
    document.getElementById("ipLastName").value = "";
    document.getElementById("ipSsn").value = ""; 
}


function getData() {
    const tests = [
        {FName : "Tim", LName : "Tomsson" , SSN : 1234321},
        {FName : "kim", LName : "Svensson" , SSN : 1234321},
        {FName : "Peter", LName : "Hansson" , SSN : 1234321}
    ];

    tests.forEach(test => {
    let table = document.getElementById("myTable");
    let row = table.insertRow(2);
    let firstName = row.insertCell(0);
    let lastName = row.insertCell(1);
    let ssNumber = row.insertCell(2);
    firstName.innerHTML = test.FName;
    lastName.innerHTML = test.LName;
    ssNumber.innerHTML = test.SSN;
    });
}