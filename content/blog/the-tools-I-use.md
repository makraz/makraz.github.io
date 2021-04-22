---
title: The tools I use
slug: the-tools-I-use
path: /blog/the-tools-I-use
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'

img: first-blog-post.jpg
alt: my first blog post
tags: [dev]

author:
  name: Benjamin
  bio: All about Benjamin
  image: https://images.unsplash.com

seo:
    title: 'Hello'
    description: 'Empower your NuxtJS application.'

createdAt: "2020-06-22T10:58:51.640Z"
updatedAt: "2020-06-22T10:59:27.863Z"
---

Every once in a while an email rolls in where someone asks me about my development environment or has questions about certain hardware.

I thought it would be fun to list out everything I use here. Keep in mind, I change things around quite a bit, but I will keep this article updated.

If I missed anything, let me know in the comments at the bottom of the post.

Demo Videos
Over the years I’ve recorded a couple of videos that pull together the tools that I use from this post so you can see how they all fit together and how they work in practice.

2020 edition
2018 edition
2016 edition
Just a heads up, this blog post will always have the latest updates on the tools that I use. That’s because I don’t record a new video every time a single tool changes.


OS
Windows 10 Professional with WSL (Ubuntu 18.04) WSL 2 (Ubuntu 20.04) and MobaXterm VcXsrv to get a Linux dev environment. It’s like you get the best of both worlds (gaming and development).

Dexpot for managing virtual work spaces. It’s one of my favorite tools and I’ve written about it before. It’s very hotkey friendly compared to Windows 10’s virtual desktops.


Code Editor and Terminal
Code Editor
I used Sublime Text 3 for a really long time.
Then I switched to VSCode in June 2018 and it served me well for a while.
As of February 2019 I’ve switched to using Vim due to VSCode’s shortcomings when it comes to writing (which I do a lot of!).
Terminal
ConEmu is a feature filled terminal for Windows.
Then I switched to Hyper and it ended up being a disaster.
Then I switched to using wsltty with tmux.
Now I’m using the new Microsoft Terminal since it makes it seamless to switch between WSL 1 and WSL 2 distros and it has low input latency.
tmux. I’ve written a tutorial on tmux if you’re interested in learning how to use it.

fzf for reverse searching your terminal history. I even created a demo video showing how it works.
There’s also my dotfiles on GitHub which has the most up to date settings for these tools and a guide on how to install all of the Linux tools quickly.


Notable Apps
Most of my web app development is done inside of Docker. Here’s a guide on how to get Docker and Docker Compose working with WSL 1, although nowadays I use WSL 2 so this guide isn’t as important anymore.

Ditto to manage multiple clipboards. It’s super handy and I wrote about clipboard managers here (they will save you a lot of time).

For searching and launching applications I used Keypirinha for a long time but then in May 2020 I switched to using Microsoft PowerToys which has an app launcher.

For setting custom global hotkeys, Auto Hotkey has served me well.

For quickly resizing windows to a specific height and width or measuring / positioning a window I use Sizer. It comes in handy for screenshots and recording videos.

For browsers I’ve used Opera from about 2006 to 2014, then I tried FireFox for a year and now I use Chrome. I’m happy with Chrome in terms of performance.

I do most of my training / consulting sessions through Google Hangouts, and I use this nifty Chrome extension to run it as a standalone app. It’s great for quick chats too.

Momentum is another really cool Chrome extension to keep you on track. I wrote about that in a post on defeating procrastination a while ago.

My favorite IRC client is HexChat. I spend a lot of time on IRC which I’ve written about.

For password management I use a command line tool called pass. Currently at 300+ passwords.

I love listening to music and I’ve been using foobar2000 since the early 2000s. It’s a light weight audio player (uses ~5mb of RAM) with a minimal but nearly perfect UI.

To quickly view and resize images I’ve been using IrfanView since the early 2000s. It’s very minimal and has useful batch operations.

For image editing like creating Youtube thumbnails and blog post images I use GIMP. If I ever switch to native Linux, it works there too. That’s the main reason why I use it.

For finance tracking and accounting I like GnuCash. It is way better than Excel for basic accounting (IMO) and it’s open source.


Computer, Desk and Phone
I run dual monitors and my primary monitor is a Dell UltraSharp U2515H 2560x1440 monitor . I wrote a huge guide on how pick to a monitor if you’re interested in how I came to that conclusion. I love it, and it was one of the most substantial upgrades I’ve made in 5 years. The other monitor is a 1920x1080 HP Pavilion 22xi which works well enough.

I assembled my workstation from individual parts back in 2014 and added a few accessories as time went on. Everything below was $850 back when I got it (some prices have went up a lot since then):

CPU: Intel i5 4460 @ 3.2GHz
RAM: 16GB (2x 8GB) G.Skill RipJaws X Series
SSD: Crucial MX 100 256GB
Video card: EVGA GeForce GTX 750
Internal HD: WD 1TB SATA 6GB/s 7200 RPM
External HD (for backups): WD 1TB My Passport (Black)
Motherboard: AsRock H97M Pro4
Case: NZXT Source 210
CPU heat sink: Cooler Master Hyper 212 EVO
Fans: Noctua NF-P12 PWM
PSU: XFX TS Series 550w (wouldn’t buy this one today)
Keyboard: AmazonBasics Wired Keyboard
Mouse: Logitech Wired G400
Mouse pad: SteelSeries QcK mass
I also run a CyberPower CP1500PFCLCD UPS battery backup. It’s been running like a champ for 9 years and has saved my work from power outages countless times. I keep my workstation, 1 monitor and cable modem + router connected to it. It lasts about an hour under normal load. I mainly went for the PFC model for the peace of mind.

In addition to the above I use a Huion H610 Pro drawing tablet and stylus. I’m not an artist by any means but it’s excellent for writing hand written slides and notes. Some of my blog post images were drawn with it.

I also use a modified Toshiba Chromebook 2 CB35 (2015) to run Linux. It’s great for a portable device which doubles as a $350 laptop capable of doing development work on the go. I do a lot of reading and some coding outside with this device. I wrote a massive guide on how to set that up.

I’ve been using a standing desk since 2016. At first I built my own custom standing desk but in mid 2020 I switched to a FlexiSpot adjustable / motorized standing desk. I mainly switched so that I could sit on a regular chair when I wanted to. It’s nice to mix it up.

I am a big fan of whiteboards, so I put together an 8x4 foot whiteboard for about $15. That post also shows the latest standing desk modification, monitor and mic that I use.

I’m anti-smartphones so I use a LG Xpression 2 slide out phone. Although I do have a TracFone Samsung Stardust for when I need data on demand. I also use it as an MP3 player on the road.


Recording and Music
I’m a HUGE fan of Camtasia 9 for recording screencasts. It’s what I used in my latest Docker course and will be using for future courses. It easily saves me dozens of hours of editing for each course. It also works for MacOS and Windows, and you can use 1 license on more than 1 machine.

I use a Logitech c920 webcam for recording video. It captures 1080p video and looks reasonable enough with a few LED light bulbs.

I use an Audio-Technica AT2005 dynamic microphone. In my opinion it’s the best screencast / podcast microphone you’re going to find unless you spend $800+. It’s what I used for the Dive Into Docker course (and all courses in the foreseeable future). I’ve written a massive guide on how to record high quality at home btw. Lots of tips and gear recommendations are there along with everything I use.

Audio Processing

REAPER is the only audio processing software that I use. It's a DAW and lets you process audio in real-time. That is super important since I record so much audio for my courses because it cuts down a lot of time on post-production editing.
As of late 2018 I picked up a Scarlett 2i2 3rd gen USB audio interface and a dbx 286s pre-amp and processor to go with it. This allows me to process all of my audio in real time without needing additional software or complicated audio redirect tools. I have not recorded any courses with this set up yet but you can check out my recent Youtube videos to hear it in action.
I do all of my audio editing and music listening through a pair of Sony MDR V6 headphones (the MDR 7506 model is linked because the MDR V6s went from $80 to $350 and supposedly the MDR 7506 is similar). I’m extremely pleased with them. I wrote a huge guide on how to pick headphones before, so check that out. I think I will use the MDR V6 headphones for the rest of my life.