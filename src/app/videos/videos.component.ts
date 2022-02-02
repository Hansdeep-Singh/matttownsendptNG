import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'matt-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  constructor() {}
  @Input() count = 0;
  videos: videos[] | undefined;
  videosUrl: videos[] | undefined;
  url: string = 'https://www.youtube.com/embed/';

  ngOnInit(): void {
    this.videos = [
      {
        url: 'https://www.youtube.com/embed/oMilfXjvuAs',
        desc: 'Mistake 4 Lack of Accountability Day 4, Video 4 of our 5 day video series where we take a look at the top five mistakes that even the most health conscious people make that could be stopping them from achieving the body of their dreams! Today we look at what affects the  decision making process of our food intake! If you found value in today s video, you can show your appreciation by smashing the like button and if you like to receive more content like this, you can subscribe for more great content',
      },
      {
        url: 'https://www.youtube.com/embed/Sb58EmNs5O8',
        desc: 'Day 3, Video 3 of our 5 day video series looking at the Top 5 mistakes even the most health conscious people make that could be stopping them from achieving the body of their dreams!    If you enjoyed this video, please share your appreciation by smashing the 👍 button and subscribing below',
      },
      {
        url: 'https://www.youtube.com/embed/h6tg19K8cq4',
        desc: 'Day 2, Video 2 of our 5 day video series Top 5 Mistakes health conscious people make in their food intake that prevent them from achieving great results!',
      },
      {
        url: 'https://www.youtube.com/embed/5vNumpupXfM',
        desc: 'In our 5 Day, 5 Video series we look at the top 5 mistakes that most health conscious people make, that prevent them from getting great results! Day One: Mistake One Does Calorie Counting really work? Should you be doing it? We look forward to your comments below, If you like this video please subscribe and give us a thumbs up👍',
      },
      {
        url: 'https://www.youtube.com/embed/Sb58EmNs5O8',
        desc: 'Day 3, Video 3 of our 5 day video series looking at the Top 5 mistakes even the most health conscious people make that could be stopping them from achieving the body of their dreams!    If you enjoyed this video, please share your appreciation by smashing the 👍 button and subscribing below',
      },
      {
        url: 'https://www.youtube.com/embed/h6tg19K8cq4',
        desc: 'Day 2, Video 2 of our 5 day video series Top 5 Mistakes health conscious people make in their food intake that prevent them from achieving great results!',
      },
      {
        url: 'https://www.youtube.com/embed/5vNumpupXfM',
        desc: 'In our 5 Day, 5 Video series we look at the top 5 mistakes that most health conscious people make, that prevent them from getting great results! Day One: Mistake One Does Calorie Counting really work? Should you be doing it? We look forward to your comments below, If you like this video please subscribe and give us a thumbs up👍',
      },
    ];

    this.videosUrl =
      this.count != 0 ? this.videos.slice(0, this.count) : this.videos;
  }
}

interface videos {
  url: string;
  desc: string;
}
