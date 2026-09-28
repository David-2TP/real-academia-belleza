const video = document.getElementById("videoAcademia");

if (!video) {
    console.error("No se encontró el elemento videoAcademia");
} else {

    const videos = [
        "videos/Video1.mp4",
        "videos/Video2.mp4",
        "videos/Video3.mp4",
        "videos/Video4.mp4",
        "videos/Video5.mp4",
        "videos/Video6.mp4",    
        "videos/Video7.mp4",
        "videos/Video8.mp4",
        "videos/Video9.mp4"
    ];

    let indice = 0;

    console.log("Video encontrado");

    video.addEventListener("ended", () => {

        console.log("Terminó:", videos[indice]);

        indice = (indice + 1) % videos.length;

        console.log("Cargando:", videos[indice]);

        video.src = videos[indice];

        video.load();

        video.play().catch(error => {
            console.error("Error reproduciendo:", error);
        });

    });

}