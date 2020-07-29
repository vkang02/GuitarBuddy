import { Component, OnInit } from "@angular/core";

@Component({
    selector: "landing",
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"]
})

export class LandingComponent implements OnInit {
    audioElement = new Audio();
    music = [
        "src/app/music/6_E.mp3",
        "src/app/music/6_F.mp3",
        "src/app/music/6_F#.mp3",
        "src/app/music/6_G.mp3",
        "src/app/music/6_G#.mp3",
        "src/app/music/6_A.mp3",
        "src/app/music/6_A#.mp3",
        "src/app/music/6_B.mp3",
        "src/app/music/6_C.mp3",
        "src/app/music/6_C#.mp3",
        "src/app/music/6_D.mp3",
        "src/app/music/6_D#.mp3"
    ];
    guitarTypes = [ "Acoustic", "Electric"];
    guitarType = "Electric";
    soundOptions = [ "Notes", "Chords", "Scales"];
    soundType = "Notes";
    repititions = 1;
    interval = 1;
    answer = "";
    playInterval;
    
    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    playAudio() {
        let file = this.music[this.randomInteger(0, this.music.length - 1)]
        this.answer = file.substring(file.lastIndexOf("/") + 1, file.indexOf("."));
        this.audioElement.src = file;
        let play = function(audio) {
            audio.load();
            audio.play();
        }
        

        this.playInterval = setInterval(play, this.interval * 1000, this.audioElement);
        
    }

    

    pauseAudio() {
        this.audioElement.pause();
        clearInterval(this.playInterval);
    }

    ngOnInit() {

    }
}