---
section: apps
metadataEnrichedAt: null
title: Vue Draganddrop
author: Diane
tags:
- Outils
description: 'Découvre Vue Draganddrop : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

## Vue FLow /lastweek
The customizable Vue 3 component, bringing interactivity to flowcharts, and graphs.
[Vue Flow](https://vueflow.dev/)

[Introduction | Vue Flow](https://vueflow.dev/guide/)

## vue3 smooth dnd
npm install vue3-smooth-dnd
## draggable plus
npm install vue-draggable-plus


## vue draggable /2yo
[SortableJS/Vue.Draggable: Vue drag-and-drop component based on Sortable.js](https://github.com/SortableJS/Vue.Draggable)
based on sortablejs
## draggable-next /3ya

[Build a Drag-and-Drop Trello Board course](https://vueschool.io/courses/build-a-drag-and-drop-trello-board)

[SortableJS/vue.draggable.next: Vue 3 compatible drag-and-drop component based on Sortable.js](https://github.com/SortableJS/vue.draggable.next) 
At it’s core, Vue Draggable is a handy wrapper around [Sortable.js](https://github.com/SortableJS/Sortable).
### Step 1 - Install Vue Draggable

In this tutorial we’ll target Vue version 3 therefore, it’s important to use the `next` version of Vue Draggable.

```jsx
npm i vuedraggable@next
```

### Step 2 - Use the component to sort array Items

Next, you can get right down to business with the draggable component. It takes an array for it’s v-model and in it’s item slot you have access to each individual item in the array. You can add whatever markup and styling you want for each item.

```jsx
<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
const meals = ref([
  'Hamburger',
  'Pizza',
  'Spaghetti',
  'Tacos',
  'Teriyaki Chicken',
]);
</script>

<template>
  <h1>Favorite Foods</h1>
  <draggable v-model="meals" tag="ul">
    <template #item="{ element: meal }">
      <li>{{ meal }}</li>
    </template>
  </draggable>
</template>
```

Best of all, each item is now magically draggable!

You can see the [result of the above code running in stackblitz here](https://stackblitz.com/edit/vitejs-vite-hjtyy9?embed=1&file=src/App.vue&view=preview).

### Step 3 - Use draggable components to move items between different arrays

Besides sorting elements within a single array, you can also move items between different arrays. This works by using another instance of the draggable component, with the v-model on a different array, and (here’s the key) a group prop that’s the same between both uses of draggable.

```html
<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
const meals = ref([…]);

const yuckyMeals = ref([
  'Bat wing soup',
  'Spicy Octopus',
  'Anything from Taco Bell',
]);
</script>

<template>
  <h1>Favorite Foods</h1>

  <!--Notice the group prop is the same on both <draggable>-->
  <draggable v-model="meals" tag="ul" group="meals">…</draggable>

  <h1>Terrible Foods</h1>
  <draggable v-model="yuckyMeals" tag="ul" group="meals">
    <template #item="{ element: meal }">
      <li>{{ meal }}</li>
    </template>
  </draggable>
</template>
```


You can checkout the [source code for this in StackBlitz.](https://stackblitz.com/edit/vitejs-vite-o3mrkm?file=src/App.vue)

### Step 4 - Jazz it Up With a Smooth Transition

Lastly, you can boost the user experience by using the animation prop to provide a smooth transition!

```html
<draggable v-model="meals" :animation="300" …>
<draggable v-model="yuckyMeals"  :animation="300" …>
```


[View the source code in StackBliz.](https://stackblitz.com/edit/vitejs-vite-mjsv7d?file=src/App.vue)

### Drag and Drop Away!

Congrats! You’ve nailed the basics of drag and drop in a Vue.js 3 application! [Checkout more examples of how to use Vue Draggable on their official examples page](https://sortablejs.github.io/Vue.Draggable/#/simple). Plus, if you’re interested in taking your drag and drop skills to the next level, checkout our premium course: **[Build a Drag-and-Drop Trello Board with Vue.js](https://vueschool.io/courses/build-a-drag-and-drop-trello-board).**

In the course, we use Vue draggable to build a completely functional Trello style task board and dive into the library more in depth, along with other technologies like Tailwind CSS and VueUse 🔥. Here's a little preview of what's in store 😉


## drag and drop web API
The article provides a comprehensive guide on how to implement drag and drop functionality in a VueJS project using the HTML Drag and Drop API. It outlines several key components:

1. **Draggable and Droppable Elements**: The API differentiates between elements that can be dragged (draggable) and elements that can accept dragged items (droppable).
    
2. **Drag and Drop Events**: The HTML Drag and Drop API offers eight events that control the drag and drop process, such as `drag`, `dragstart`, `dragend`, `dragenter`, `dragleave`, `dragover`, `drop`, and how they function.
    
3. **dataTransfer Object**: Adds the capability to transfer data during drag and drop operations using `setData` and `getData` methods.
    
4. **VueJS Integration**: The tutorial demonstrates how to set up project data, create computed properties for filtering lists, build the template for displaying the items, enable elements to be draggable and specify droppable zones. It emphasizes the importance of styling droppable zones to ensure they can be interacted with even when they appear empty.
    
5. **Adding Functionality**: Provides coding steps to handle drag events (`startDrag` method) and drop events (`onDrop` method). It uses Vue's built-in `.prevent` event modifier to enable dropping functionality.
    

The tutorial concludes that while this is a simple introduction, learning the basics of the drag and drop functionality can lead to implementing more advanced features in VueJS projects.


Adding drag and drop functionality is a great way to make your Vue apps feel more natural and user friendly.

There are tons of use cases from making a responsive file system all the way to allowing users to build their own dashboards.

Like all [UI elements](https://learnvue.co/2019/12/8-free-vue-icon-libraries-to-pretty-up-your-web-app/), there are several drag and drop libraries out there, but honestly, it’s super valuable to understand how all of them work under the hood. And who knows? Maybe your use case is better suited to writing your own custom code.

In this tutorial, we’ll be using the built-in HTML Drag and Drop API to set up a simple drag and drop system. Like this…


Hopefully, by the end, you’ll have a better understanding of this API and how to add it into your projects. Let’s go!

### [Drag and Drop API](https://learnvue.co/articles/vue-drag-and-drop#drag-and-drop-api)

The [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) is a built-in way to enable drag and drop functionality in your app. It contains several events and properties, but we can approach it with the mindset that there are two types of elements.

- Draggable Elements – ones that can **be dragged**
- Droppable Elements – ones that can **accept** dragged elements

If we look at it like this, then it will make analyzing the Drag and Drop events much easier.

### [Drag and Drop Events](https://learnvue.co/articles/vue-drag-and-drop#drag-and-drop-events)

There are eight drag and drop events in the API that we can implement in our app.

- `drag` – a dragged item is dragged
- `dragstart` – we start dragging a draggable element
- `dragend` – a drag ends (e.g. we let go of the mouse)
- `dragenter` – wen a dragged item enters a droppable element
- `dragleave` – a dragged item leaves a droppable element
- `dragover` – a dragged item is moved over a droppable element (calls every hundred milliseconds or so)
- `drop` – a dragged item is dropped on a droppable element

### [The dataTransfer Object](https://learnvue.co/articles/vue-drag-and-drop#the-datatransfer-object)

One of the most useful things to know about the Drag and Drop API is that it adds this `dataTransfer` object to events.

**This dataTransfer object allows us to set data when we start dragging an element and access the same data when we drop our element in a drop zone.**

We should know a few properties/methods of dataTransfer (if you want to know more, check out the [complete documentation](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)).

- `dropEffect` – the current drag and drop operation (e.g. move, copy)
- `effectAllowed` – also specifies the drag and drop operation
- `setData(name, val)` – allows us to add values to our dataTransfer object
- `getData(name)` – retrieves our stored values

### [Creating Our Own Drag and Drop System](https://learnvue.co/articles/vue-drag-and-drop#creating-our-own-drag-and-drop-system)

Again, here’s the example we’re going to make…


As you can see, there are two lists and we can smoothly drag and drop items between them.

### [Setting up our project](https://learnvue.co/articles/vue-drag-and-drop#setting-up-our-project)

First, we have to set up our data. Inside our script, we’re going to create an array of items objects, each with

- `id` – a unique id so we can look up our objects
- `title` – some display text
- `list` – the list it belongs to.

I decided to add three items in this array

```
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          title: 'Item A',
          list: 1,
        },
        {
          id: 1,
          title: 'Item B',
          list: 1,
        },
        {
          id: 2,
          title: 'Item C',
          list: 2,
        },
      ],
    }
  },
}
</script>
```

Then, I also created two [computed properties](https://learnvue.co/2019/12/mastering-computed-properties-in-vuejs/) that filtered our item list into items from List 1 and items from List 2.

```
<script>
export default {
  // …
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2)
    },
  },
}
</script>
```

It’s better to create computed properties than to use a `v-if`inside your `v-for`. If you would like the explanation, [check out this Vue best practices article.](https://learnvue.co/2020/01/12-vuejs-best-practices-for-pro-developers/)

### [Creating our template code](https://learnvue.co/articles/vue-drag-and-drop#creating-our-template-code)

In our template, here’s the outline of our components. This code will display everything, but have no drag and drop capabilities.

```
<template>
  <div>
    <div class="drop-zone">
      <div v-for="item in listOne" :key="item.title" class="drag-el">
        {{ item.title }}
      </div>
    </div>
    <div class="drop-zone">
      <div v-for="item in listTwo" :key="item.title" class="drag-el">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
```


It doesn’t really matter how you style your components.

**But it is important that your drop zones have some height even when they have no inner elements.**

Otherwise, you won’t be able to hover over it!

```
<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
```

I did this by adding some padding to the drop-zone style. Here’s my entire style for this component.

### [Adding drag and drop functionality](https://learnvue.co/articles/vue-drag-and-drop#adding-drag-and-drop-functionality)

Where the magic actually happens is when we start capturing our drag-and-drop events.

But, first, we need to add some methods to our script: one for when we start dragging an element and one for when we drop an element.

For the `startDrag` method, we want to store the id of the element we are dragging using the `dataTransfer` property we talked about earlier.Also, we want to tell that this drag event will be a move.

Then, in `onDrop`, we want to retrieve the stored id so we can access the proper item in the array.

Once we have it, we can just set its list to whatever we passed the method.

```
<script>
export default {
  //…
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
  },
}
</script>
```

Okay. Now that we have that out of the way, we can add our template code.

Let’s start with adding events to our items. We will need to make our element draggable and detect the drag start event.

```
<div
  class="drag-el"
  v-for="item in listTwo"
  :key="item.title"
  draggable
  @dragstart="startDrag($event, item)"
>
  {{ item.title }}
</div>
```

Since we added the `draggable` attribute, if you run your app, you should be able to drag your element around like this, but you won’t be able to drop it anywhere.


**Let’s give it a drop zone to accept our new draggable elements.**

First, we have to add the `drop` event listener that calls our onDrop method.

```
<div class="drop-zone" @drop="onDrop($event, 1)"></div>
```

However, one thing that is not-intuitive is that we have to call `preventDefault` on two of the drag-and-drop hooks: `dragEnter` and `dragOver`.

This is because, by default, those two methods do not allow elements to be dropped. So, for our `drop` event to work properly, we have to **prevent their default action.**

We can do this using Vue’s built in `.prevent` event modifier.

```
<div
  class="drop-zone"
  @drop="onDrop($event, 1)"
  @dragover.prevent
  @dragenter.prevent
></div>
```

And that should be it!

If we run our app now, we should see that everything works as expected. We can drag and drop elements between our two different lists.


### [Conclusion](https://learnvue.co/articles/vue-drag-and-drop#conclusion)

While this example is a very simple one, it’s neat to see how the HTML Drag and Drop API works and get some hands on experience with it. It’s really not as intimidating as it first appears.

I hope that you picked up a thing or two from this tutorial and have thought of interesting ways to implement these techniques into your projects!