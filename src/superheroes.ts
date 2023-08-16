function initHeroes()
{
    fetch("https://akabab.github.io/superhero-api/api/all.json")
    .then(response => response.json().then(showHeroes));
}
function showHeroes(data: superHero[])
{
    // sorteer op alignment: 'good' or 'bad' or '_'
    data.sort((a,b) => a.biography.alignment.localeCompare(b.biography.alignment));

    // sorteer op alignment: 'good' or 'bad' or '_'
    // data.sort((a,b) => a.biography.alignment.localeCompare(b.biography.alignment));


    let title = document.getElementById("title") as HTMLHeadingElement;
    title.innerHTML = "Er zijn " + data.length + " superheroes";

    let output = document.getElementById("output") as HTMLDivElement;

    for(let h of data)
    {
        // console.log(h.name);
        let div = document.createElement("div");
        div.className = "hero";

        let h3 = document.createElement("h3");
        h3.innerHTML = h.name;
        div.append(h3);

        let img = document.createElement("img");
        img.src = h.images.sm;
        div.append(img);

        let p1 = document.createElement("p");
        p1.innerHTML = h.appearance.gender;
        div.append(p1);

        // let p2 = document.createElement("p");
        // p2.innerHTML = h.appearance.race;
        // div.append(p2);

        let p2 = document.createElement("p");
        
        if (!h.appearance.race)
            h.appearance.race = "&nbsp;";

        p2.innerHTML = h.appearance.race;
        div.append(p2);

        let p3 = document.createElement("p");
        p3.innerHTML = "Alignment: " + h.biography.alignment;
        div.append(p3);

        for (let prop in h.powerstats)
        {
            let p = document.createElement("p");
            p.innerHTML = prop + ": " + (h.powerstats as any)[prop];
            div.append(p);
        }



        output.append(div);
    }
}