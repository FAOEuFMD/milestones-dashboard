// Define type for expected result object
interface ExpectedResult {
  [key: string]: string;
}

// Define type for main objects in array
// Not all entries have the same properties, so use ? to indicate they're optional
interface InfoDataEntry {
  focus_objective_name_1?: string;
  focus_objective_name_2?: string;
  focus_objective_name_3?: string;
  key_area_name_1?: string;
  key_area_name_2?: string;
  key_area_name_3?: string;
  key_area_name_4?: string;
  key_area_name_5?: string;
  key_area_name_6?: string;
  key_area_name_7?: string;
  expected_result_1?: ExpectedResult;
  expected_result_2?: ExpectedResult;
  expected_result_3?: ExpectedResult;
  expected_result_4?: ExpectedResult;
  expected_result_5?: ExpectedResult;
  expected_result_6?: ExpectedResult;
  expected_result_7?: ExpectedResult;
}

// Define the type for the whole array
// Need to write InfoDataEntry[] to specify that infoData is an array of objects, not just a single object matching InfoDataEntry
const infoData: InfoDataEntry[] = [
  {
    focus_objective_name_1:
      "Improved PROTECTION of LIVESTOCK sector in EuFMD Member Nations from FAST introduction and spread",
    key_area_name_1:
      "Ensure risk information are regularly collected, analyzed and available for risk managers in Member Nations and other countries",
    expected_result_1: {
      expected_result_1_1:
        "FAST global surveillance sustained and viral intelligence up-scaled",
      expected_result_1_2: "Enabled risk monitoring",
      expected_result_1_3: "Enhanced FAST early warning",
    },
    key_area_name_2:
      "Enhance prevention, confidence of freedom, laboratory biosafety to increase protection against FAST diseases",
    expected_result_2: {
      expected_result_2_1: "Improved livestock biosecurity in MNs",
      expected_result_2_2:
        "Confidence in disease freedom for some critical areas to Europe",
      expected_result_2_3: "FMD Minimum biorisk standards implemented",
    },
  },
  {
    focus_objective_name_2:
      "Adequate capacities to RESPOND TO CRISES and improved resilience of livestock sector to FAST diseases in Member Nations",
    key_area_name_3:
      "Improve skills for effective and efficient response to FAST incursion",
    expected_result_3: {
      expected_result_3_1:
        "Upgraded capacity development opportunities for MNs",
      expected_result_3_2:
        "Enhanced skills and competencies of Veterinary Services and Laboratories ",
      expected_result_3_3:
        "Improved and shared Emergency management practices through technical networking",
    },
    key_area_name_4:
      "Sustain capacity to assess impact of FAST incursion, assist proper response to crises and timely scaling-up of resources",
    expected_result_4: {
      expected_result_4_1:
        "developed and upgraded response tools available to MNs",
      expected_result_4_2: "Contingency planning capacity regularly assessed",
      expected_result_4_3:
        "Diagnostic capability maintained or improved in MN laboratories",
    },
  },
  {
    focus_objective_name_3:
      "Greater CONTROL OF FAST diseases in risk areas to reduce the spread of diseases and their impact on livestock sector",
    key_area_name_5: "Sustain Global FMD Control Strategy",
    expected_result_5: {
      expected_result_5_1:
        "Level of satisfaction on the functionalities of dashboards",
      expected_result_5_2:
        "Tailored support provided to priority endemc countries and regions ",
    },
    key_area_name_6:
      "Sustain capacity to assess impact of FAST incursion, assist proper response to crises and timely scaling-up of resources",
    expected_result_6: {
      expected_result_6_1:
        "Number of risk information sharing platform functioning",
      expected_result_6_2:
        "Improved capacity for disease prioritization and resource mobilization",
    },
    key_area_name_7:
      "Sustain capacity to assess impact of FAST incursion, assist proper response to crises and timely scaling-up of resources",
    expected_result_7: {
      expected_result_7_1:
        "Number of training initiatives to promote the use of the RMT",
    },
  },
];

export default infoData;