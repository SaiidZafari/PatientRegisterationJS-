function register(){
    var table = document.getElementById("myTable");
    var row = table.insertRow(2);
    var firstName = row.insertCell(0);
    var lastName = row.insertCell(1);
    var ssNumber = row.insertCell(2);
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
    var table = document.getElementById("myTable");
    var row = table.insertRow(2);
    var firstName = row.insertCell(0);
    var lastName = row.insertCell(1);
    var ssNumber = row.insertCell(2);
    firstName.innerHTML = test.FName;
    lastName.innerHTML = test.LName;
    ssNumber.innerHTML = test.SSN;
    });
}