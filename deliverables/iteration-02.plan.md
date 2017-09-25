# YOUR PRODUCT/TEAM NAME

Lost and Found App/TEAM 24

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration XX

 * Start date: 2017-03-01
 * End date: 2017-03-09

## Process

(Optional:) Quick introduction

We will build an Android app this time, since all of us don’t have any experience with Android Studio, we plan to learn it in a few days. 

If we find we cannot learn it quickly later, we will discuss and find out a solution. 

#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.

[Ken]( https://github.com/Kennnyoung) and [Mason]( https://github.com/MasonYue) are responsible the frontend

[Shan]( https://github.com/zuoyigehaobing), [Kinder]( https://github.com/chenj209) and [Bryan]( https://github.com/BryanLX) are responsible for the backend


#### Events

Describe meetings (and other events) you are planning to have:

 * When and where? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync' meeting online, etc.

2017-03-01, BA2195, in person.
Discuss about how to learn Android Studio, Separate tasks.
Everyone should be familiar with Android Studio in a few days and build a small app.


2017-03-03, BA2195, in person.
See can we handle Android Studio and make a final decision about what language to use.

2017-03-06, BA2195, in person.
Plan to finish frontend works and some basic backend works.

2017-03-09, BA2195, in person.
Plan to finish all tasks and make a review.


#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-do lists, Task boards, schedule(s), etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * How do you prioritize tasks?
   * How do tasks get assigned to team members?

Ken will be our frontend leader and Kinder will be our backend leader.

1.	First we need a basic frontend frame and a database for our project.
2.	Ken will assign works to front end team members, if someone meets problem that cannot be solved alone, then everyone can offer a help. First they will study some open source sample front end code and try to understand and can modify it. Then they will modify it to our own project front end and help connect it to our backend database.
3.	Kinder will assign works to back end team members, they will first find out how to connect to a database, then design a nice database and can extract data from that.



#### Git / GitHub workflow

Describe your Git / GitHub workflow.     
Essentially, we want to understand how your team members share a codebase and avoid conflicts.

 * Be concise, yet precise.      
For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Don't forget to **explain why** you chose this workflow.

Everyone should create a new branch first, then write code for our project. When the code is finished, everyone should review it and if there is no problem and team leader agreed. This code will merge it to our Master branch.

No one should merge it to Master without other team members’ review.

Since if everyone creates a new branch, there will be no conflict with others, and we can reverse it later if we don’t want this part. This way is also safer since everyone will review all the codes and will know what happened before merge to our Master branch.


## Product

#### Goals and tasks

 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.

Goals:
1.	Finish a runnable project.
2.	Finish a nice-looking front end since it’s directly used by our users.
3.	Finish an efficient database and a steady connection to our database.

Tasks:
For front-end: 
1.	Find a nice platform first and learn how to modify it.
2.	Add new functions like upload lost items and search lost items. Since these are our core functions.
3.	Generate serial code for lost items.
For back-end:
1.	Design an efficient database.
2.	Learn how to make a steady connection to our database.
3.	Can add, get, modify data from/to our database.

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

 * Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
 * Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
 * Be concise, yet precise.         
   For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.

1.	Build a home page which can let user upload, search lost items.
2.	For the search function, results will be returned from our database and users can see them in a new web page. So we need a good connection to our database and an efficient search algorithm.
3.	For the upload function, users can upload lost items and after they finished, they will see if they upload successful or not.
4.	Users can generate a serial code for their items. We will generate a random unique code for users.
