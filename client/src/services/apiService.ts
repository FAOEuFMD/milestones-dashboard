// apiService.ts
// i needed to create a new file for API services in React where i can define the functions that interact with the API backend 
// define functions that will fetch data from the backend e.g. /alltargets API endpoint in the targets.js
// i need to import this in the other React components or into React Context (also created new)
export const fetchTargets = async () => {
    const response = await fetch("/alltargets");
    if (!response.ok) {
      throw new Error("Error fetching targets");
    }
    const data = await response.json();
    return data;
  };
  