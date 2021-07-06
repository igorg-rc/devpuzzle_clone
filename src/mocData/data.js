import backendIcon from '../files/images/tech_icons/backend.png'
import frontendIcon from '../files/images/tech_icons/frontend.png'
import servicesIcon from '../files/images/tech_icons/services.png'
import databaseIcon from '../files/images/tech_icons/database.png'

import eCommerceImg from '../files/images/our_works/e-commerce.png'
import enterpriceImg from '../files/images/our_works/enterprice.png'
import dataScrappingImg from '../files/images/our_works/data-scrapping.png'
import bookingEnterpriceImg from '../files/images/our_works/booking_enterprice.png'
import financeTradingImg from '../files/images/our_works/finance_trading.png'
import socialNetworkImg from '../files/images/our_works/social-network.png'

// "What we do" section 
export const techList = [
  {"_id": 1, "title": "Back-end", imgPath: backendIcon, "techList": ["Laravel", "Python", "Node.js", "Express.js"]},
  {"_id": 2, "title": "Front-end", imgPath: frontendIcon, "techList": ["Vue.js", "Angular", "React.js", "React Native"]},
  {"_id": 3, "title": "Services", imgPath: servicesIcon, "techList": ["Jira", "Trello", "Readmine", "Agile / Scrum"]},
  {"_id": 4, "title": "Database", imgPath: databaseIcon, "techList": ["MySQL", "MongoDB", "PostgreSQL"]}
]

// "Intro, Footer" sections
export const navLinks = [
  {"text": "What we do", "path": "WhatWeDo"},
  {"text": "Testimonials", "path": "Testimonials"},
  {"text": "Our Works", "path": "OurWorks"},
  {"text": "Contacts", "path": "Contacts"}
]

// "Testimonials" section
export const testimonials = [
  {"name": "Oles K.", "position": "CEO", "company": "influencersfriend", "text": "Great job! Thank you, Alex, for the work done!It was a difficult project where strong developing skills in working with social media API and payment integration needed. I'd love to work with you again. Would recommend highly!"},
  {"name": "Rommel E.", "position": "Manager", "company": "Syslab Corp.", "text": "Great work! Looking forward to working with DevPuzzle Team in the future..."},
  {"name": "Makgoadi M.", "position": "CTO", "company": "Solor", "text": "Rehired as pleased with the work."},
  {"name": "William W.", "position": "CTO", "company": "lionsFX", "text": "We would definitely hire Alexander again! Pleasure to work with."},
]

// "Our Works" section
export const ourWorks = [
  {"title": "e-commerce", "imgUrl": eCommerceImg, "description": "doorson-line.com is an online store of garage doors with online constructor. The main features are: Two admin types; Payment system; Worked with MailChimp service."}, 
  {"title": "Enerprise", "imgUrl": enterpriceImg, "description": "promlead.com is a platform for Lead Project Managers like Jira. The main features are: Create projects, tasks, teams, time tracking and comments; Activity reports; History of changes and events; Deep linking to user members, tasks and docs."}, 
  {"title": "Data scrapping", "imgUrl": dataScrappingImg, "description": "influencerlist.today – analyze and selection of popular Facebook, Instagram, YouTube and Pinterest bloggers for advertising agencies. The main features are:Data scraping from Facebook/ Instagram / Youtube (work with their APIs); External database integration (Airtable); CRON time-based job scheduler; PayPal integration/ mailing via Mad Mimi; Monetization with Facebook pixel and affiliate programs."}, 
  {"title": "Booking / enterprice", "imgUrl": bookingEnterpriceImg, "description": "excelbeds.com – place booking and management in nursing homes. The main features: 6 types of users with different rights; Complex reports; Distribution of places between London nursing homes."}, 
  {"title": "Finance / trading", "imgUrl": financeTradingImg, "description": "lionsfx.com is a First-Class Trading Leader CFD, Cryptocurrencies, FX and Indices.The main features are: Connect to LionsFX Affiliate program; API Integration to the site."}, 
  {"title": "Social network", "imgUrl": socialNetworkImg, "description": "distribution.projectoblio.com is an online social network that allows you to create a profile with photo and information about yourself, search for friends via Facebook and exchange messages with them, upload photos from Facebook."}, 
]