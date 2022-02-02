import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'matt-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss'],
})
export class PodcastsComponent implements OnInit {
  constructor() {}

  @Input() count = 0;
  podcasts: podcasts[] | undefined;
  podcastsUrl: podcasts[] | undefined;

  urlbefore: string = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FOsloHealthandFitnessFTG%2Fvideos%";
  urlafter: string = "%2F&show_text=false&width=560&t=0";
  

  ngOnInit(): void {
    this.podcasts = [
      {
        url: "2F322500316092170",
        desc: "Weekly podcast series Episode 4! ⭐ We are back after a 3-week lockdown! This week we talk about the importance of mindset and routine and how to ensure we continue to push ourselves in the right direction after a lockdown. If you're feeling like your training has lost momentum after the lockdown then make sure you take a listen! Any questions as per usual team, please leave them in the comment section below! Have a great Sunday night! 🥰",
      },
      {
        url: '2F2961775330771418',
        desc: 'Mistake 4 Lack of Accountability Day 4, Video 4 of our 5 day video series where we take a look at the top five mistakes that even the most health conscious people make that could be stopping them from achieving the body of their dreams! Today we look at what affects the  decision making process of our food intake! If you found value in today s video, you can show your appreciation by smashing the like button and if you like to receive more content like this, you can subscribe for more great content',
      },
      
    ];


    this.podcasts = this.podcasts.map(el=>({url:this.urlbefore+el.url+this.urlafter,desc:el.desc}))

    this.podcastsUrl =
      this.count != 0 ? this.podcasts.slice(0, this.count) : this.podcasts;
  }
}
interface podcasts {
  url: string;
  desc: string;
}
