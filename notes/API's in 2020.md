# API's in 2020

This Page: <https://vcad.chrisconnelly.ca>

## Intro to API's

### What is an API

The term API is an acronym, and it stands for “Application Programming Interface.”

Think of an API like a menu in a restaurant. The menu provides a list of dishes you can order, along with a description of each dish. When you specify what menu items you want, the restaurant’s kitchen does the work and provides you with some finished dishes. You don’t know exactly how the restaurant prepares that food, and you don’t really need to.

Similarly, an API lists a bunch of operations that developers can use, along with a description of what they do. The developer doesn’t necessarily need to know how, for example, an operating system builds and presents a “Save As” dialog box. They just need to know that it’s available for use in their app.

This isn’t a perfect metaphor, as developers may have to provide their own data to the API to get the results, so perhaps it’s more like a fancy restaurant where you can provide some of your own ingredients the kitchen will work with.

But it’s broadly accurate. APIs allow developers to save time by taking advantage of a platform’s implementation to do the nitty-gritty work. This helps reduce the amount of code developers need to create, and also helps create more consistency across apps for the same platform. APIs can control access to hardware and software resources.

#### Why tho

API's make life easier for a developer!!

Let’s say you want to develop an app for an iPhone. Apple’s iOS operating system provides a large number of [APIs](https://developer.apple.com/api-changes/)—as every other operating system does—to make this easier on you.

If you want to embed a web browser to show one or more web pages, for example, you don’t have to program your own web browser from scratch just for your application. You use the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) API to embed a WebKit (Safari) browser object in your application.

If you want to capture photos or video from the iPhone’s camera, you don’t have to write your own camera interface. You use the camera API to embed the iPhone’s built-in camera in your app. If APIs didn’t exist to make this easy, app developers would have to create their own camera software and interpret the camera hardware’s inputs. But Apple’s operating system developers have done all this hard work so the developers can just use the camera API to embed a camera, and then get on with building their app. And, when Apple improves the camera API, all the apps that rely on it will take advantage of that improvement automatically.

This applies to every platform. For example, do you want to create a dialog box on Windows? [There’s an API for that](https://msdn.microsoft.com/en-us/library/windows/desktop/ff818516(v=vs.85).aspx). Want to support fingerprint authentication on Android? [There’s an API for that](https://developer.android.com/about/versions/marshmallow/android-6.0.html#fingerprint-authentication), too, so you don’t have to test every different Android manufacturer’s fingerprint sensor. Developers don’t have to reinvent the wheel over and over.

![API%20s%20in%202020%20db94ff4d4fb64ac09e679655d20a7140/api-model.png](API%20s%20in%202020%20db94ff4d4fb64ac09e679655d20a7140/api-model.png)

When the user makes a request through the webpage this is sent to the API that is stored on a server and usually backed by a database.

### JSON

#### What is JavaScript Object Notation

JSON or JavaScript Object Notation is an encoding scheme that is designed to eliminate the need for an ad-hoc code for each application to communicate with servers that communicate in a defined way. JSON API module exposes an implementation for data stores and data structures, such as entity types, bundles, and fields.

#### More about JSON

[What is JSON API? Overview of JSON API: Text-based data exchange](https://www.valuebound.com/resources/blog/overview-of-json-api)

### What does an API call look like

First we make the call to the API

```jsx
GET /articles?include=author HTTP/1.1
```

We then get the data we requested.

```json
HTTP/1.1 200 OK //The 200 code = all g!
Content-Type: application/vnd.api+json

{
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON:API paints my bikeshed!",
      "body": "The shortest article. Ever.",
      "created": "2015-05-22T14:56:29.000Z",
      "updated": "2015-05-22T14:56:28.000Z"
    },
    "relationships": {
      "author": {
        "data": {"id": "42", "type": "people"}
      }
    }
  }],
  "included": [
    {
      "type": "people",
      "id": "42",
      "attributes": {
        "name": "John",
        "age": 80,
        "gender": "male"
      }
    }
  ]
}
```

Thats it! thats a basic API call.

## Building an API

Lets build an easy and fun API!
