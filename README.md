Set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created,
and another function that looks for that data in localStorage when your app is first loaded

Make sure your app doesn’t crash if the data you may want retrieve from localStorage isn’t there!
localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. You cannot store functions in JSON, figure out how to add methods back to your object properties once you fetch them

when deleting tasks/projects saveProjects()
add stopPropogation
