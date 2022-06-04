# Dreadful Tomato

Dreadful Tomato is a new platform to find new movies and TV shows. The main objective is to
help users to find information about their favourite TV shows and movies.

To do so, the company has to create a new web app that allow users do some fancy things.

## What do you have to do?

Dreadful Tomato needs to implement an awesome webpage where the users could view information
about almost every new TV Shows and movie.

The Design team has sent us the new interface which has to be implemented. As you could see,
there are three different pages.

- The first page is a landing page where user could select whether she wants to see TV shows
  or movies and some claims and logo of Dreadful Tomato
- The second one is the list of TV shows. Here, the user could filter TV shows by title and
  release year. In that page the user will see a list of card with the Title, description
  and image from each TV show.
- The third one is quite similar, but for the movies. The user could filter by title and
  release year as well, to see a list of cards with the information of every movie.

Here you could see the design of the 3 pages:

Home page:

![](images/Dreadful%20Tomato%20-%20HOME.png)

TV shows page:

![](images/Dreadful%20Tomato%20-%20POPULAR%20SERIES.png)

Movies page:

![](images/Dreadful%20Tomato%20-%20POPULAR%20MOVIES.png)

## Technical Requirements

Their CTO has no time to implement that, but she has defined some technical constraints:

- This webapp has to be developed using Angular
- Create reusable components
- Create a **clean, maintainable and well-designed** code
- Test your code until you are comfortable with that

#### Considerations

- To obtain the data of the TV Shows and Movies, you have to request [that file](https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json).
- Use SCSS or SASS to manage your stylesheets
- Use any component you want in the date picker to allow the user select the Year
- Pay attention to hover effects (Home and Shows/Movies cards)

To understand how you take decisions during the implementation, please write a README file
explaining some of the most important parts of the application.

---

## How to submit your solution

- Push your code to the `devel` branch - we encourage you to commit regularly to show your thinking process was.
- **Create a new Pull Request** to `main` branch & **merge it**.

Once merged you **won't be able to change or add** anything to your solution, so double-check that everything is as
you expected!

Remember that **there is no countdown**, so take your time and implement a solution that you are proud!

## 📝📝👇👇

**explanation about the process**

1- **make the skeleton or structure** - I created two different folders. One called _shared_, here the navBar will be located. And it receives this name because I will see that Bar for all my app. Then I created a folder call _tomatoes_, where you will find the main _components_ and the App _routes_. I use to working with components and its styling file in order to make it easier to follow and to make corrections. As well, as you can see, both two main folders have _their own Module_.

2- I exported all the components that have to be used outside of their modules, and imported both modules inside the _app.modeile.ts._ Then, I pasted all the selectors in the app.component.html to be sure that _all is working properly_.

3- Then, I went to create the routes, using **routemodule**, when I have my module created and all the route inside, I started working in the different componnets.

4 - Usually, I create the structure of the components using facke data to have a first idea about the info that I will need to get from the API. That is why, I create the HTMLs structure and then I started working in the _logic_ of the APP.

5 - A **service** was created, in order to work in there with the data management.As I had to comsume an API and then use that information in different comoponents, I think that a service is the best way to handle this data then use them in those diferent components.

6 - I called the API using **POSTMAN** in order to know how the data comes, the structure of the data that i was to receive. I could see that, with one of the objects inside the array I was going to have a problem to work with it, I decided to desestructure the data creating a method called **dataParser** with the aim of get a more friendly object to work with.

7 - I made the calls to the API, geting all the information and passing it through the method **dataParser**. Taking a look to the structure, I created the interfaces in a new folder with the data shema.

8 - Having all the data in the services, I started working component by component. Creating the propieties for one by one, Getting the data from the service, and changing the facke data for the correct one. I started with the _HomePage_, when I finished it, I went to another component and so on. Following the structure of the APP.

9 - Onece, I first prototype was created, I continue adding some logic to the APP sach as Pagination (creating a method in the components **for-movies and for-TvShows**), to achieve that functionality. Gotten that, I create the searcher function adding an adiotional function where the user can Save the film or Serie that He is watching in that moment using the Localstorage to keep alive that information.

10 - When two main screeen were created (TvShows and Movies), I worked in the component which use _dinamic routes_. That one which will show information about an specific option choosen by the user.

11- having all working in a mobile Size, I went to work with the Styling to get responsive components.

Aditional data: 📣

- To get information from the Input, I decided to use **@viewChild** because I needed only infromation from a simply input, for a bigger App, I would use _formsModule_ and ngMmodel.

- calls to the API done using HttpClient.

- a _Pipe_ was created, to manage the pagination in an easy way.

- Jest was installed to test the App but there was some probles for some needed permisions and incompatibilities.

**Thank you so much, I hope this like you**

_Regards_
# cloneNetflix---Angular
