import {RowData, GroupedKeyArea} from "../types/interfaces.ts";

// Group data by key area
export const groupByKeyArea = (data: RowData[]): GroupedKeyArea[] => {
    return data.reduce((acc: GroupedKeyArea[], item: RowData) => {
    // Find if there's already an object in the accumulator with this key area id
    const existingGroup = acc.find(group => group.key_area_id === item.key_area_id);

    // If found, push the item into the existing group
    if (existingGroup) {
      existingGroup.items.push(item);
    } else {
      // If not found, make new group and add it to accumulator
      acc.push({key_area_id: item.key_area_id, items: [item]});
    }
    // Inner return for reduce function
    return acc;
    // Initialize accumulator as an empty array
  }, []);
};

  // Split Key Area name into two parts based on brackets to format separately
  export const formatKeyAreaName = (name: string): [string, string] => {
    // Get indices of brackets
    const openBracket = name.indexOf('[');
    const closeBracket = name.indexOf(']');
    // get part inside brackets and make all uppercase
    const insideBracket = name.slice(openBracket + 1, closeBracket).toUpperCase().trim();
    // get part after brackets
    const outsideBracket = name.slice(closeBracket + 1).trim();

    // Convert insideBracket to title case
    let titleCaseInsideBracket = "";
    switch (insideBracket) {
        case 'RISK MONITORING':
            titleCaseInsideBracket = "Risk Monitoring";
            break; 
        case 'RISK MITIGATION':
            titleCaseInsideBracket = "Risk Mitigation";
            break;
        case 'CAPACITY DEVELOPMENT':
            titleCaseInsideBracket = "Capacity Development";
            break;
        case 'TOOLS AND RESOURCES':
            titleCaseInsideBracket = "Tools and Resources";
            break;
        case 'GLOBAL FMD CONTROL':
            titleCaseInsideBracket = "Global FMD Control";
            break;
        case 'FAST CONTROL':
            titleCaseInsideBracket = "FAST Control";
            break;
        case 'VACCINE SECURITY':
            titleCaseInsideBracket = "Vaccine Security";
            break;
        default:
            titleCaseInsideBracket = "Unknown Key Area";
    }

    // return as an array
    return [titleCaseInsideBracket, outsideBracket]
  };

// Calculate completed targets
export const countMet = (targets: RowData[]): number => {
    const met = targets.filter((target) => target.result_to_date >= target.program_target);
    return met.length;
};

// Targets in progress
export const countProgress = (targets: RowData[]): number => {
    return targets.filter((target) => target.result_to_date > 0 && target.result_to_date < target.program_target).length;
};   

// Targets not started
export const countNotStarted = (targets: RowData[]): number => {
    return targets.filter((target) => target.result_to_date === 0 || target.result_to_date === null).length;
}