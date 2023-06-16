import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Inject }  from '@angular/core';
import { ChatGPTAPI } from 'chatgpt'

import { Configuration, OpenAIApi } from 'openai'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
   @ViewChild('test', { static: true }) p: ElementRef;
   gptresponse:any = ""

   cgptkey:any ="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"

 configuration = new Configuration({
  apiKey: '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',
});
 
 openai = new OpenAIApi(this.configuration);

 
 



async cgpt(){

   const api = new ChatGPTAPI({
  apiKey:'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',
  completionParams: {
    model: 'gpt-4',
    temperature: 0.5,
    top_p: 0.8
  }
})
 const chatCompletion = await this.openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: this.prompt}],
});
this.gptresponse=chatCompletion.data.choices[0].message
    console.log(this.gptresponse)


}





   keyword:any = ""
   pOpen:any = false
   prompt:any = ""
cardsData1:any = [
  {
    title: "Optimize Website Speed for SEO",
    description: "Improve website loading speed for better search engine rankings and user experience.",
    linkText: "Open Prompt"
  },
  {
    title: "Craft Engaging Meta Descriptions",
    description: "Create compelling meta descriptions to boost click-through rates in search results.",
    linkText: "Open Prompt"
  },
  {
    title: "Implement Structured Data for Rich Snippets",
    description: "Improve search engine visibility by implementing structured data markup for rich snippets.",
    linkText: "Open Prompt"
  },
  {
    title: "Optimize Images for SEO",
    description: "Optimize images for better search engine rankings and faster website loading.",
    linkText: "Open Prompt"
  },
  {
    title: "Create an Effective Link Building Strategy",
    description: "Develop a successful link building strategy to improve website authority and rankings.",
    linkText: "Open Prompt"
  },
  {
    title: "Optimize Content for Voice Search SEO",
    description: "Optimize website content for voice-based queries and better voice search visibility.",
    linkText: "Open Prompt"
  },
  {
    title: "Mobile-Friendly Web Design for SEO",
    description: "Ensure mobile-friendly web design for improved SEO and enhanced user experience.",
    linkText: "Open Prompt"
  }
];

cardsData2:any = [
  {
    title: "Optimize Website Navigation for SEO",
    description: "Explore techniques to improve website navigation for better search engine rankings and user experience.",
    linkText: "Open Prompt"
  },
  {
    title: "Utilize Long-Tail Keywords for SEO Success",
    description: "Explain the significance of long-tail keywords in SEO and their impact on targeted organic traffic.",
    linkText: "Open Prompt"
  },
  {
    title: "Maximize User Engagement for SEO Benefits",
    description: "Discuss the relationship between user engagement metrics and SEO rankings.",
    linkText: "Open Prompt"
  },
  {
    title: "Perform a Comprehensive SEO Audit",
    description: "Explain the process of conducting an SEO audit to identify and address website optimization issues.",
    linkText: "Open Prompt"
  },
  {
    title: "Create High-Quality Content for SEO",
    description: "Explore the importance of creating valuable and engaging content for SEO purposes.",
    linkText: "Open Prompt"
  },
  {
    title: "Optimize Local SEO for Your Business",
    description: "Discuss strategies to improve local search engine visibility for businesses.",
    linkText: "Open Prompt"
  },
  {
    title: "Stay Updated with SEO Trends and Algorithms",
    description: "Explain the importance of staying informed about the latest SEO trends and algorithm updates.",
    linkText: "Open Prompt"
  }
];


ngAfterViewInit() {
      // this.input is NOW valid !!
 // this.p.nativeElement.innerHTML='Hello World'
   }

onClick(x:any,y:any) {
  if(y !==""){
    this.pOpen =1
    setTimeout(() => {
   this.pOpen = 2
  }, 5000);
  }
  this.keyword = y
  this.prompt = x + " " + "Keyword:"+this.keyword
  console.log(x,this.keyword)
    this.cgpt()
    console.log(this.gptresponse)





}
}

