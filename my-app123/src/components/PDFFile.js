import react from "react";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#d11fb6",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>
              Hayden Dillon-Lloyd 12937 Foster Road Unit 12 Portland, OR 97236
              Email: dillonlloyd@hotmail.com Phone: 435-671-3253 EXPERIENCE
              Bob’s Red Mill Whole Grain Store, Portland, OR - Lead Line Cook
              Nov. 2020- Currently Employed Started as a Line cook here, where I
              worked every station, interact with customers daily, worked at the
              cash register, prepped, cooked breakfast and lunch. After one year
              I became a kitchen lead and I am currently employed here to this
              day. Amazing company, with amazing quality organic and non-gmo
              grains, which most everyone can recognize in just about every
              grocery store in America. Great combination of healthy food, and
              quick service. Here I am responsible for all food coming from the
              cafe/restaurant, covering shifts if we have callouts, assigning
              break times, making sure my staff is ready to go, fully stocked,
              have the tools they need for service, notify the proper channels
              if something isn’t working such as POS, hood system, grills,
              fridge units. Helping place orders, and put away orders,
              inventory, doing catering orders and lots of special events. We
              regularly serve 200-300 people a day. Pok Pok NW, Portland, OR
              —Lead Line Cook/Assistant Manager Kitchen March 2018 - March 2020
              Unfortunately the Company had to close their doors due to the
              economic situation with Covid-19. I have worked for the company
              for 2 years, delved deep into the cooking techniques and complex
              flavors of Thai Cuisine. Managed for 6 months at the end of my
              stay there, responsible for opening the property, assigning prep
              tasks, orders (produce, dry goods, and Commissary Kitchen prep
              items) , closing the property, and writing daily logs, and
              managing back of house staff. American Queen Steamboat Company,
              Vancouver, WA — Line Cook April 2017- March 2018 Worked this
              seasonal job as a line cook on a cruise ship on the Columbia
              River. Working 6 weeks on and 2 weeks off, for 10-12 hour shifts
              everyday while on board. Responsible for your station while
              maintaining independence, usually just given a menu and expected
              to have all items prepared on time, which would change daily.
              Interacting with guests and helping them with anything that they
              needed in regards to food and beverage, cooking breakfast, lunch
              and dinner for the guests everyday throughout their cruise.
              Required to pass maritime safety, fire safety, and FDA regulations
              since it is a multiple State Operation and maritime vessel. Bill
              White Restaurant Group, Park City, UT— Line Cook November
              2013-April 2017 Worked for this company almost 4 years, Learned
              every Station at multiple properties, also worked as maintenance
              during AM shifts and Line cooking during PM shifts. Almost always
              had two jobs during my time with them. They had a total of 9
              successful properties which I have worked at 7 of them, where I
              did everything from prep cooking, pantry, baking, pasta maker (6
              months), grill/protein stations, Saute, and maintenance as well as
              knowing the lockbox codes for all properties and the basic
              functions of all appliances and equipment there. References Jared
              Bilhorn Executive Sous Chef: Pok Pok Restaurants Phone:
              715-491-1065 Matt Mcmillen Executive Chef: Bill White Enterprises
              Phone: 435-503-1006 Bruce Frazier Phone: 801-971-5971 Director of
              Operations: Bill White Enterprises Daniel Felicitas Executive Sous
              Chef: American Queen Steamboat Company Phone: 925-409-5656 Kasie
              Rapp General Manager Bob’s Red Mill Whole Grain Store Phone:
              503-778-0955
            </Text>
          </View>
          <View style={styles.section}>
            <Text>World</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
