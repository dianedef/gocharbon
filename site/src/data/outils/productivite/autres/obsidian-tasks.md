---
section: apps
metadataEnrichedAt: null
tags:
- Outils
title: Obsidian Tasks
author: Diane
description: 'Découvre Obsidian Tasks : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

Sources :  [How to Manage Tasks in Obsidian](https://obsidian.rocks/how-to-manage-tasks-in-obsidian/).

Si ton travail comporte des _délais_, tu devras créer un système fiable pour te rappeler les échéances à venir. Même si tu n'as pas d'échéances dans ton travail, tu peux quand même créer un système pour te rappeler de faire quelque chose à un moment donné. Dans Obsidian, il s'agit de faire remonter des notes à la surface au moment opportun. Tu as peut-être besoin de faire une pause mentale dans un projet, mais tu ne veux pas l'oublier complètement. Voici une solution : ajoute une date d'échéance, et si tu as une vue d'aujourd'hui dans Obsidian, ton coffre-fort te rappellera de revoir cette note au moment opportun. L'utilisation des dates d'échéance comme _rappels_ est extrêmement puissante. Si tu as un _système de confiance_ pour tes rappels, tu peux immédiatement oublier une tâche après avoir ajouté la date d'échéance. Tu sais qu'elle refera surface quand tu en auras besoin. Les tâches n'ont pas besoin d'être une corvée : elles peuvent être source de vie. Elles peuvent t'aider à éliminer la surcharge cognitive et à te concentrer sur la bonne chose au bon moment. La vue "Aujourd'hui" est l'un des meilleurs moyens que nous ayons trouvés pour t'aider à te concentrer sur la bonne chose, et elle t'aide à tirer le meilleur parti d'Obsidian.

- Installe et active** le plugin Tasks ([voici comment](https://obsidian.rocks/how-to-use-community-plugins-in-obsidian/))

Crée une note appelée "Aujourd'hui" à la base de ton coffre-fort Obsidian. Il s'agira de ta vue "rappel", qui listera tous tes engagements en cours et à venir. Nous commençons par ajouter des dates d'échéance à quelques tâches.
Crée une tâche en utilisant la syntaxe suivante : `-[ ]` (note l'espace entre les crochets). xLe menu Tâches s'affiche et te propose quelques options :


Clique sur "date d'échéance"(due date) et tu peux soit taper une date complète, soit utiliser une date _relative_, comme "demain" ou "mardi prochain", et Tasks la convertira en une date correcte.
## Le langage de requête Tasks

Nous allons maintenant utiliser le [Tasks Query Language](https://obsidian-tasks-group.github.io/obsidian-tasks/queries/) pour dresser la liste de nos tâches à venir.  Lorsque je cherche des tâches à accomplir, j'aime utiliser plusieurs requêtes différentes, afin de me donner une "hiérarchie" d'importance. Pour commencer, c'est une bonne idée de lister les tâches en retard, pour ton attention immédiate, avec cette requête :

````
## Do Now
```tasks
not done
due before today
```
````

I also added the header “Do now”, to remind myself how important these tasks are.

Next up, I like to list tasks that are due today.

````
## Do Today
```tasks
not done
due today
```
````

Once I complete tasks that are overdue or due today, I like to widen my horizons, and focus on tasks that are _important_ but not _urgent_. We can do that by grabbing tasks that are high priority:

````
## Do Next
```tasks
not done
priority is high
```
````

After that, it’s good to have an overview of tasks that are _coming up_. So I add “Upcoming” tasks, these are due in the next week.
Altogether, those four blocks look like this:

````
## Do Now
```tasks
not done
due before today
```

## Do Today
```tasks
not done
due today
```

## Do Next
```tasks
not done
priority is high
```

## Upcoming
```tasks
not done
due after today
due before in one week
short mode
hide edit button
hide backlink
```
````

Feel free to copy the code above into your vault. If you have tasks enabled and tasks with due dates, you should see results immediately!

## Working with a Today view

Working with a Today view might look something like this:

Start every day (or every Obsidian session) with your Today view. Ideally you should immediately complete any tasks in the “Do Now” bucket, and make note of any tasks that exist in the “Do Today” bucket.

After clearing those two buckets, take a look at tasks that are _important but not urgent_. This is typically the most valuable work, so it’s a good idea to empty the “urgent” inboxes first thing in the day to make room for the important stuff.

Before finishing my day, you can review the “Upcoming” tasks and decide if you want to add anything else to the agenda for tomorrow or not. If so, go through your projects and add due dates (or priorities) to the next things you next want to work on.

I use my Today view constantly, and it remains one of the most useful things I’ve built in Obsidian. If you work with tasks in Obsidian, I highly recommend creating your own “today” view.

### Like this:

Search

## Join the Newsletter

Subscribe for more Obsidian tips and tricks.

Subscribe

We won't send you spam. Unsubscribe at any time.

Tim Miller

[September 30, 2022](https://obsidian.rocks/creating-a-today-view-in-obsidian/)

[GTD](https://obsidian.rocks/category/gtd/), [Tasks](https://obsidian.rocks/category/tasks/)

[dashboard](https://obsidian.rocks/tag/dashboard/), [howto](https://obsidian.rocks/tag/howto/)

### 6 responses to “Creating a Today View in Obsidian”

1. 
    
    Lisandro
    
    [December 27, 2022 at 8:26 am](https://obsidian.rocks/creating-a-today-view-in-obsidian/#comment-311)
    
    Great article! I found it very clear and useful. Thanks!
    
    [Reply](https://obsidian.rocks/creating-a-today-view-in-obsidian/#comment-311)
    
2. 
    
    Kevin
    
    [February 8, 2023 at 7:04 am](https://obsidian.rocks/creating-a-today-view-in-obsidian/#comment-576)
    
    Thank you for this clear and elaborate article. I am learning how to properly use obsidian and your articles are very helpful. Thanks.
    
    [Reply](https://obsidian.rocks/creating-a-today-view-in-obsidian/#comment-576)
    
3. [How I use Obsidian to manage my reading and writing – shona reads](https://shonareads.wordpress.com/2023/03/13/how-i-use-obsidian-to-manage-my-reading-and-writing/)
    
    [March 13, 2023 at 3:20 am](https://obsidian.rocks/creating-a-today-view-in-obsidian/#comment-932)
    
    […] Creating a Today View in Obsidian – Obsidian Rocks […]
    
    [Reply](https://obsidian.rocks/creating-a-today-view-in-obsidian/#comment-932)
    
4. 
    
    Ralph
    
    [August 2, 2023 at 12:25 pm](https://obsidian.rocks/creating-a-today-view-in-obsidian/#comment-2155)
    
    By “today view” are you talking about the Daily Notes? If not, why wouldn’t you put the task snippets into your Daily Note template and then its a fresh note everyday without the clutter of all the tasks from previous “Todays”?
    
    [Reply](https://obsidian.rocks/creating-a-today-view-in-obsidian/#comment-2155)
    
    1. 
        
        [Timothy Miller](https://obsidian.rocks/)
        
        [August 2, 2023 at 4:49 pm](https://obsidian.rocks/creating-a-today-view-in-obsidian/#comment-2161)
        
        Not exactly. As specified above, the Today View is a stand-alone note that pulls in tasks specific to the current day, using Dataview and Tasks.
        
        Since Obsidian doesn’t have notifications, the Today view is akin to a replacement for notifications. It’s meant to bring things to your attention when you need them, and not before.
        
        You can also manage tasks within Daily Notes if you want, but that requires a different workflow, and requires that you create a new note every day. The Today view has no such requirement, all you have to do is open the note and you’re good to go.