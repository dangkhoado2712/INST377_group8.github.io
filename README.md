# PG County Litter Webiste
## Link for the github page: https://dangkhoado2712.github.io/INST377_group8.github.io/



## Project Name: PG County LitterTrack Website

### Information problem:
The target broswer is regular webpage, no matter what kinds of OS that users use can conduct the the project. The webpae also allows users operate from mobile device, such as cell phone and tablet. 
By browsing the PG County’s OpenData API under the environment category, we decide to use the LitterTRAK dataset as our base for the project. The dataset is a list of data that tracks the collection of trash and debris by PG County residents and community organizations. One row, of the dataset, represents litter reports either by the organization or country residents in one location, it includes information on the type of litter which indicates types of categories of objects it is, such as car parts, furniture, or regular bags of garbage, and numbers of objects(litter), area name, district code, fiscal year, file creation date, and location in longitude and latitude. 
As the problem is, the dataset is dataset, performing raw information. It is hard to pick up important information just by looking at it, there are many possible way to turn the LitterTrack dataset into visulization.

We want to utilized the dataset to perform the information in visualization, adding titles, fronts and filter to demonstrate result from user’s operation on the website we create. We assume users could find out the most frequent trash that PG county has, maybe they are leaves or tires. 

### Design Solution:

For our design, we will have two main designs for this project. The first design is the front end of the website which can be interacted with users. The second main design is the back-end of the website, we will access the public website of PG county’s API and supply the data for remote access.

### First design:
We will use the HTML/CSS/Javascript to build the website to show the information about the PG county trash situation.
We using HTML to construct the front page looks like
In the CSS, we mainly using bookstrap as framework to construct the project
Turnning to the Javascript, we using it make filter to fetch data user searched from dataset, and also displaying it to users. 

The website will have data visualization such as the map of the PG’s county with the trash information to help users have clear information and understand the PG county trash situation.

Visulization:We will create some form or table to help users filter and sort the data which they want based on the zip code, area or type of trash.

### Second design:

The dataset/API we are using for our website: https://data.princegeorgescountymd.gov/Environment/LitterTRAK/9tsa-iner/data.
API ENDPOINT: https://data.princegeorgescountymd.gov/resource/9tsa-iner.json
We also focus on the the column "Type of Litter" and the column "Geocoded_column".
We will apply the method to get the API and ingest the information to our website. We also will show the live data on the map of the PG county. 

