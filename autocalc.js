function calcPrise() {

    let sum = 0;

    const models = document.querySelector(".changemodel").value;
    console.log(models);

    const rightwheels = document.querySelector(".rightwheel").checked;
    console.log(rightwheels);

    const leftwheels = document.querySelector(".leftwheel").checked;
    console.log(leftwheels);

    const diselFuel = document.querySelector(".diselfuel").checked;
    console.log(diselFuel);

    const gasFuel = document.querySelector(".gasfuel").checked;
    console.log(gasFuel);

    const electroFuel = document.querySelector(".electrofuel").checked;
    console.log(electroFuel);

    const yeahr = document.querySelector(".changeyeahr").value;
    console.log(yeahr);

    const owner = document.querySelector(".changeowner").checked;
    console.log(owner);

    const volume = document.querySelector(".volumevalue").value;
    console.log(volume);

    if (rightwheels) sum += 1;
    if (leftwheels) sum += 3;
    if (diselFuel) sum += 2;
    if (gasFuel) sum += 4;
    if (electroFuel) sum += 1;
    if (owner) sum += 5;

    sum += +models + +yeahr + +volume;

    let result = sum;

    console.log(result);
    document.getElementById("result").innerHTML = result;

}