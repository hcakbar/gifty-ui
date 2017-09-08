import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gifty';

  // TODO pull data from db
  giftLists = [
    {
      "name": "PlayStation",
      "description": "The PlayStation Portable became the most powerful portable system when launched",
      "price": "$300",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/PSP_E1000_illustration.svg/600px-PSP_E1000_illustration.svg.png"
    },
    {
      "name": "PS4",
      "description": "PlayStation 4 (PS4) is a line of eighth generation home video game consoles developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 3 during a press conference on February 20, 2013, it was launched on November 15 in North America, November 29 in Europe, South America and Australia; and February 22, 2014, in Japan. It competes with Nintendo's Wii U and Switch, and Microsoft's Xbox One.",
      "price": "$500",
      "url": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Sony-PlayStation4-Pro-Console-FL.jpg"
    },
    {
      "name": "Nintendo Switch",
      "description": "The Nintendo Switch[b] is the seventh major video game console developed by Nintendo. Known in development by its codename NX, it was unveiled in October 2016 and was released worldwide on March 3, 2017. ",
      "price": "$500",
      "url": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Nintendo-Switch-JoyCon-Grip-FL.jpg"
    },
    {
      "name": "Xbox",
      "description": "Xbox is a video gaming brand created and owned by Microsoft. It represents a series of video game consoles developed by Microsoft, with three consoles released in the sixth, seventh, and eighth generations respectively. The brand also represents applications (games), streaming services, and an online service by the name of Xbox Live. The brand was first introduced on November 15, 2001 in the United States, with the launch of the original Xbox console",
      "price": "$600",
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/43/Xbox-console.jpg"
    },
    {
      "name": "Xbox 360",
      "description": "The Xbox 360 is a home video game console developed by Microsoft. As the successor to the original Xbox, it is the second console in the Xbox series. It competed with Sony's PlayStation 3 and Nintendo's Wii as part of the seventh generation of video game consoles. It was officially unveiled on MTV on May 12, 2005, with detailed launch and game information announced later that month at the E3 expo.",
      "price": "$900",
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/76/Xbox-360S-Console-Set.jpg"
    }
  ];

}
