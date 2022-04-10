function calcPrise() {

    /*--функция выбора марки--*/

    let models;

    function changeModel(event) {

        switch (event.target.value) {
            case '0':
                models = 1;
                console.log(models);
                break;

            case '1':
                models = 2;
                console.log(models);
                break;

            case '2':
                models = 3;
                console.log(models);
                break;
            case '3':
                models = 4;
                console.log(models);
                break;
        }
    }

    /*--функции выбора руля--*/

    let wheels;

    function leftWheel(event) {
        wheels = 9;
        console.log(wheels);
    }

    function rightWheel(event) {
        wheels = 8;
        console.log(wheels);
    }

    /*--функции выбора топлива--*/

    let fuel;

    function diselFuel(event) {
        fuel = 10;
        console.log(fuel);
    }

    function gasFuel(event) {
        fuel = 11;
        console.log(fuel);
    }

    function electroFuel(event) {
        fuel = 12;
        console.log(fuel);
    }

    /*--функция выбора года--*/

    let yeahr;

    function changeYeahr(event) {
        switch (event.target.value) {
            case '2020':
                yeahr = 1;
                console.log(yeahr);
                break;

            case '2010':
                yeahr = 2;
                console.log(yeahr);
                break;

            case '2000':
                yeahr = 3;
                console.log(yeahr);
                break;
            case '1990':
                yeahr = 4;
                console.log(yeahr);
                break;
            case '1980':
                yeahr = 5;
                console.log(yeahr);
                break;
            case '1979':
                yeahr = 6;
                console.log(yeahr);
                break;
        }
    }

    /*--функция выбора единственного владельца--*/

    let owner;

    function changeOwner(event) {
        owner = 22;
        console.log(owner);
    };

    /*--объем двигателя--*/

    let volume = document.querySelectorAll(".volumevalue")[0].value;
    console.log(volume);



}