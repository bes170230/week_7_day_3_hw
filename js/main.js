const getData = async() => {
    let season = document.querySelector('#season').value;
    let round = document.querySelector('#round').value;
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`);
    return response.data
}

const loadData = async() => {
    let driver = await getData();

    for (let i = 1; i < 8; i++){
        let name = document.createElement('td');
        let firstName = driver.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName;
        let lastName = driver.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName;
        let fullName = `${firstName} ${lastName}`;
        name.innerHTML = fullName
        document.getElementById(`row-${i}`).append(name)

        let nationality = document.createElement(`td`);
        let nat = driver.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
        nationality.innerHTML = nat;
        document.getElementById(`row-${i}`).append(nationality)

        let sponsor = document.createElement(`td`);
        let spons = driver.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
        sponsor.innerHTML = spons;
        document.getElementById(`row-${i}`).append(sponsor)

        let points = document.createElement(`td`);
        let pts = driver.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points;
        points.innerHTML = pts;
        document.getElementById(`row-${i}`).append(points)
    }
}