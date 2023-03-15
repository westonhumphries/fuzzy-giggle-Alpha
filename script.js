// A $( document ).ready() block.

// $ = welcome to jQuery land

//IIFE = immediately invoked function expression
$(document).ready(function () {
  //meat of the function goes here
  console.log("I am ready now!");

  //todo: user clicks button
  $("#btnGreeting").click(function () {
    console.log("you got clicked!");

    //todo: read from input value
    //let userName = "default";
    userName = $("#userName").val();
    console.log("Hi there my new friend,", userName);

    userMsg = "Hi there my new friend, " + userName;

    //todo: re pkg their input into a welcome message => DOM/HTML Doc/Browser
    $("div").text(userMsg);
  });

  // here's an example of invoking via HTML Element Name.
  // $("button").click(function () {
  //   console.log("you clicked...a button? which one?");
  // });

  var someString = "Weston's Page";
  var someOtherString = 'Weston Says: "do\'t intersperse quote sytles"';

  //todo: re pkg their input into a welcome message
});