
const apiUrl=`http://localhost:3000/Cuisines`;


fetch(apiUrl)
    .then(res =>res.json())
    .then ((data) => console.log(data)); 

    function searchCuisine(cuisines, title, location) {
        const results = [];
        for (const cuisine of cuisines) {
            if ((!title || cuisine.Title.toLowerCase() === title.toLowerCase()) &&
                (!location || cuisine.location.toLowerCase() === location.toLowerCase())) {
                results.push(cuisine);
            }
        }
        return results;
    }
    
    // DATA TO USE
    const cuisines = [
        {
            
            
                    "id": "1",
                    "location": "Central America",
                    "Title": "Hearts of Palm Salsa",
                    "Description": "This fresh and tangy salsa is like a chunky pico de gallo with a little twist: tomatoes, onion, cilantro, lime juice, and hearts of palm—the white inner core of specific varieties of palm trees. The combination of sweet-tart tomatoes, pungent red onion, herbal cilantro, tart lime juice, and  creamy hearts of palm works wonderfully as a fresh-tasting topping for grilled meat and tacos or as a quick, tasty appetizer when paired with crunchy tortilla chips.",
                    "Prep time": "40 minutes",
                    "Serves": "16 servings",
                    "Rating": "5 stars",
                    "Nutrition facts (per serving)": [
                        "16 calories",
                        "0g Fat",
                        "3g Carbs",
                        "1g Protein"
                    ],
                    "Ingredients": [
                        "5 tomatoes",
                        "4 g Diamond Crystal kosher salt",
                        "400g can hearts of palm",
                        " 60 g onions",
                        "2 medium garlic cloves",
                        "1 jalapeno chile",
                        " 12g cilantro leaves",
                        "15ml fresh lime juice",
                        "Tortilla chips"
                    ],
                    "Recipe": {
                        "0": " In a large bowl, add tomatoes and salt and toss to combine. Transfer tomatoes to a fine-mesh strainer or colander and set inside large bowl. Let drain for 30 minutes; discard liquid and wipe out bowl.",
                        "1": "In now-empty bowl, add drained tomatoes, hearts of palm, onion, garlic, jalapeño, cilantro, and lime juice; mix until thoroughly combined.",
                        "2": " Serve immediately with tortilla chips, or transfer to an airtight container and refrigerate for up to 4 days."
                    },
                    "image": "https://www.seriouseats.com/thmb/VY3eWhVHY-yDUPKDEdNl9gPvlAg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210712-hearts-of-palm-salsa-vicky-wasik-seriouseats-2-b8398fa8794647028254a60e5be4810a.jpg"
                },
                {
                    "id": "2",
                    "location": "Central America",
                    "Title": "Gallopinto(Nicaraguan Rice and Beans)",
                    "Description": " Rice and beans are served at every single meal in Nicaragua.",
                    "Prep time": {
                        "0": "Cook 2 hours 30 minutes",
                        "1": "Active 45 minutes",
                        "2": "Chilling time 24 hours",
                        "3": "Total time required = 27 hours 5 minutes"
                    },
                    "Serves": "8 servings",
                    "Rating": "5 stars",
                    "Nutrition facts (per serving)": [
                        "194 calories",
                        "7g Fat",
                        "26g Carbs",
                        "7g Protein"
                    ],
                    "Ingredients": [
                        "60ml Vegetable Oil",
                        "200g of finely chopped yellow onion",
                        "300g Long grain white rice",
                        " 3 cups Chicken stock",
                        " 5g Diamond kosher salt",
                        "85g Green bell pepper",
                        " 225g Dried small red or black beans",
                        "3g Diamond Crystal kosher salt(to be added to beans)",
                        "4 Medium garlic cloves"
                    ],
                    "Recipe": {
                        "0": " For the Rice: In a large heavy-bottomed saucepan, heat 2 tablespoons oil over medium heat until shimmering. Add two-thirds of onion and cook, stirring, until softened and translucent, about 5 minutes. Add rice and cook, stirring, until grains are shiny and evenly coated with oil, 2 to 3 minutes. Add water or stock and salt, increase heat to high, and bring to a boil. Place bell pepper on top of rice. ",
                        "1": "Boil rice without stirring until most of the liquid has evaporated and you can see small bubbles bursting on the surface of the rice. Immediately reduce the heat to the lowest setting, cover, and cook for 15 minutes. Remove and discard bell pepper. Fluff rice with chopsticks or fork, then let cool. Transfer to an airtight container and refrigerate for 24 hours. ",
                        "2": " For the Beans: Spread beans out in a rimmed baking sheet. Pick out any debris and broken beans. Transfer beans to colander and rinse under cold running water. Place rinsed beans in a large pot and cover with cold water; water should cover beans about 3 inches. Let soak for 30 minutes.  ",
                        "3": " Bring beans to a boil over high heat. Reduce heat to maintain a simmer and cook beans for 30 minutes. Turn off heat, cover beans, and let rest 1 hour. Bring beans back up to boil over high heat. Add salt and garlic, reduce heat to maintain a simmer, and cook until beans are tender, 30 to 60 minutes. Drain beans or, if desired, strain over a bowl and retain liquid for another use. You should have about 3 cups of cooked beans; measure out 2 cups of beans and reserve the rest for another use.  ",
                        "4": "  For the Gallopinto: In large saucepan, heat remaining 2 tablespoons oil over medium-high heat until shimmering. Add remaining onion and cook, stirring, until softened and translucent, about 5 minutes. ",
                        "5": "Add rice and beans, and cook, stirring, until rice is evenly coated. Continue to cook, stirring, to allow flavors to meld and gallopinto to become slightly crisp, about 10 minutes. Serve immediately with scrambled or fried eggs, a side of corn tortillas, and queso fresco. If desired, cover and cook over low heat for an additional 10 minutes."
                    },
                    "image": "https://www.seriouseats.com/thmb/Pv2aZxLbUt5CWAuaW8EsOnBMWlc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SEA-gallopinto-nicaraguan-rice-and-beans-recipe-hero-01_1-cd02f69002f44947ab42f29e6134aa03.JPG"
                },
                {
                    "id": "3",
                    "location": "Central America",
                    "Title": "Salpicon(Nicaraguan Minced Meat) ",
                    "description": " Salpicón is a traditional dish in Nicaragua, simply made by simmering cubes of lean beef in water with onions, green bell peppers, garlic, salt, and black peppercorns. Once cooked through, the vegetables are tossed out with the broth and the beef is finely chopped with fresh onions and bell peppers, then finished off with a squeeze of lime juice. It's a rather healthy dish, especially when compared to many of our other national favorites that just love being submerged in sizzling lard or oil. ",
                    "Prep time": {
                        "0": "Prep 10 minutes",
                        "1": "Cook 45 minutes",
                        "2": "Active 30 minutes",
                        "3": "Total time required =55 minutes"
                    },
                    "Serves": "4 to 6 servings",
                    "Rating": "3 stars",
                    "Nutrition facts (per serving)": [
                        "323 calories",
                        "14g Fat",
                        "4g Carbs",
                        "47g Protein"
                    ],
                    "Ingredients": [
                        "900g Beef round cut into one and a half inch cubes",
                        "A Large Green bell pepper",
                        "A Large white or yellow onion",
                        " 2 Teasppons Diamond Crystal kosher salt",
                        " 2 Teaspoons Black peppercorns",
                        "4 Medium Garlic cloves",
                        " A Lime",
                        "4 Tablespoons unsalted Butter"
                    ],
                    "Recipe": {
                        "0": " In a large pot, combine beef, half of the bell pepper, half of the onion, salt, peppercorns, and garlic. Add enough cold water to cover ingredients by 2 inches. Bring mixture to boil over medium-high heat, then immediately reduce heat to medium-low, and simmer until beef is cooked through, about 15 minutes. ",
                        "1": " Strain beef mixture through a fine-mesh strainer set over a large heatproof bowl; remove and discard bell pepper, onion, peppercorns, and garlic and discard liquid. Allow beef to cool for 10 minutes.",
                        "2": " In a food processor fitted with a metal blade, combine half of the beef, half of the remaining bell pepper, and half of the remaining onion and pulse until mixture is finely chopped. Transfer to large mixing bowl and repeat with remaining beef, bell pepper, and onion. Squeeze lime over beef and toss to combine. Season with salt to taste. ",
                        "3": "Salpicón may be served immediately or toasted slightly in a skillet. To toast in a large skillet, melt butter over medium-high heat. Add beef and cook, stirring, until beef is beginning to crisp and dry out, about 15 minutes. Serve right away with white rice and small red kidney beans, or gallopinto. "
                    },
                    "image": " https://www.seriouseats.com/thmb/MNWWKSm7WUxQs4fWIqpneKjWj50=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/salpicon-nicaraguan-minced-meat-recipe-hero-01_1-6cddba6e280b49a0aa6485e1f66f47a5.JPG"
                },
                {
                    "id": "4",
                    "location": "Caribbean",
                    "Title": "Jamaican Oxtail",
                    "description": "A deeply satisfying stew with an incredibly rich and flavorful gravy, oxtail with broad beans.",
                    "Prep Time": {
                        "0": "Prep 35 minutes",
                        "1": "Cook 3 hours 50 minutes",
                        "2": "Marinating time 24 hours",
                        "3": "Total time required= 28 hours 25 minutes"
                    },
                    " Serves": "6 servings",
                    "Rating": " 4 and a half stars",
                    "Nutrition facts (per serving)": [
                        "312 calories",
                        "12g Fat",
                        "15g Carbs",
                        "15g Protein"
                    ],
                    "Ingredients": [
                        "1 and a half Medium Yellow onion roughly choppped",
                        "3 scallions ,root ends trimed and cut into 2-inch segments",
                        "4 Medium Garlic cloves",
                        "Half a scotch bonnet pepper",
                        "1 Tablespoon (15ml) Soy Sauce",
                        "2 Teaspoons Diamond Crystal kosher salt",
                        "1 Teaspoon Freshly Ground Black Pepper",
                        "1 Tablespoon Fresh Thyme Leaves",
                        "30ml Vegetable Oil",
                        "Half a medium Yellow Onion",
                        "1 Scallion root end trimmed",
                        "4 Medium Garlic Cloves rougly chopped",
                        "10 Springs of Fresh Thyme",
                        "1 Whole SCottch Bonnet Pepper ",
                        "1 Tablespoon Soy Sauce",
                        "One and a half cup of all-purpose flour",
                        "Kosher salt",
                        "1 Tablespoon Ground Black Pepper",
                        "Cooked white rice or rice and peas ,fried plantain,sliced  avocado,and/or green salad ,for serving"
                    ],
                    "Recipe": {
                        "1": " For the Marinated Oxtail: In a blender, combine onion, scallion, garlic, and Scotch bonnet with 1/2 cup (120ml) water and blend until thoroughly pureed. Rub oxtail all over with soy sauce, salt, pepper, and thyme. Transfer oxtail to a large bowl or large zipper-lock bag and pour blended aromatics on top. Mix well to coat, then cover bowl or seal bag, pushing out air as you go. Refrigerate for 24 hours.",
                        "2": "Remove oxtail from marinade and scrape off excess marinade. Reserve marinade for later use.",
                        "3": "For the Stew: In a Dutch oven, heat oil over medium-high heat until shimmering. Working in batches to avoid crowding the pot, add oxtail and cook until browned all over, about 5 minutes per side (oxtail will brown more quickly and deeply due to the marinade, but turn down heat if it threatens to burn). Transfer oxtail to a platter and repeat with remaining oxtail, adding more oil to the pot if necessary.",
                        "4": " Add 1 cup (240ml) water to Dutch oven and bring to a simmer, scraping bottom of pot to remove any browned bits. Return oxtail and any juices to the pot.",
                        "5": " Add onions, scallion, garlic, thyme, Scotch bonnet pepper, and browning or soy sauce to oxtail. Add just enough water to cover meat, bring to a simmer, then reduce heat, cover, and let simmer for 40 minutes.",
                        "6": "Add reserved oxtail marinade to pot and stir to combine. Continue to gently simmer, uncovered, adding a little water from time to time to ensure oxtail remains just barely covered, until oxtail is tender, about 2 hours.",
                        "7": "For the Spinners (Optional) and to Finish: If making spinners: In a small bowl, whisk together flour and a large pinch of salt. Add 1/2 cup (118ml) cold water and knead until a sticky dough ball forms. Cover and let rest 15 minutes. Tear off small pieces of dough and roll them into cigarette-sized strips. Stir into oxtail.",
                        "8": "Stir in butter or broad beans and let simmer until stew is thickened, about 30 minutes. Remove thyme sprigs.",
                        "9": " Add black pepper, season with salt, and serve with white rice or rice and peas, plantain, sliced avocado, and a nice fresh green salad."
                    },
                    "image": " https://www.seriouseats.com/thmb/tuJIYE5BJg2XrFd6ySEAioZI-Iw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230531-SEA-Oxtail-KarinaMatalon-hero-24a6a91d87cd4cefa8dc43adf4b456af.jpg"
                },
                {
                    "id": "5",
                    "location": "Caribbean",
                    "Title": "Cuban-Style Pollo a la Plancha (Marinated and Griddled Chicken)",
                    "description": " Pollo a la plancha is a classic dish in many Latin American countries. Sometimes also called pechuga a la plancha, thereby denoting the chicken part used (the breast), the dish name translates to chicken cooked on a flat top grill or griddle. The exact preparation seems to vary based on who you ask and which country they're from, but the Cuban version of this dish requires marinating the chicken in Cuban-style adobo or mojo.",
                    "Prep Time": {
                        "0": "Prep 25 minutes",
                        "1": "Cook 30 minutes",
                        "2": "Marinating 30 minutes",
                        "3": "Total time required= 85 minutes"
                    },
                    " Serves": "4servings",
                    "Rating": " 4 and a half stars",
                    "Nutrition facts (per serving)": [
                        "442 calories",
                        "13g Fat",
                        "10g Carbs",
                        "68g Protein"
                    ],
                    "Ingredients": [
                        " 6 Medium Garlic Cloves",
                        "60ml Freshly squeezed Orange Juice",
                        "One and a Half Teaspoons Ground Cumin",
                        "One and a half Teaspoons Dried Oregano",
                        "1 Teaspooon Freshly Ground Black Pepper",
                        "Half teaspoons Ground allspice(optional)",
                        "Kosher salt",
                        "4 Boneless ,skinless Chicken Breast halves or 8 chicken cutlets",
                        "1 Tablespoon Vegetable oil",
                        "A Large White or Yellow Onion sliced crosswise into a quater inch thick rings",
                        "Cooked long-grain rice and black beans ,for serving",
                        "Picked Cilantro leaves,for serving",
                        "Lime wedges ,for serving"
                    ],
                    "Recipe": {
                        "1": " Using a blender or food processor, purée garlic, orange juice, lime juice, cumin, oregano, black pepper, allspice (if using), and 2 teaspoons kosher salt until well blended. (Alternatively, to make with a mortar and pestle, pound the garlic with the salt to form a paste, then mix in the rest of the ingredients. Alternatively, finely grate or mince the garlic and stir together with the remaining ingredients in a small bowl.)",
                        "2": " If using chicken breast halves, cut into cutlets following our instructions here, pounding to an even thickness of about 1/4 inch. (If desired, you can butterfly the breast halves by not fully cutting all the way through, so that they open like a book; butterflied breasts also need to be pounded to an even thickness.)",
                        "3": " Place chicken cutlets in a large zipper-lock bag or shallow baking or glass storage dish. Add marinade, making sure it coats chicken evenly all over. Press out excess air and seal zipper-lock bag, or cover dish with plastic or a lid. Refrigerate for 30 minutes; if chicken is in a dish, turn it once halfway through.",
                        "4": "  Remove the chicken breasts from the marinade and wipe off any excess. In a stainless steel skillet, heat oil over medium-high heat until shimmering. Working in batches, if necessary, to prevent crowding the pan, add the chicken cutlets and cook until golden brown on each side, 2 to 3 minutes per side. Transfer cooked cutlets to a platter and cover with foil or place in a low oven to keep warm. Repeat with remaining chicken, adding more oil if the pan gets too dry.",
                        "5": " In the same skillet that you cooked the chicken, add more oil if the pan is dry and heat over medium-high heat until shimmering. Add the onion rings, season with salt, and sauté until the onions have softened a bit and started to brown, 7 to 10 minutes; lower heat and/or add a small splash of water if the contents of the pan threaten to burn.",
                        "6": "Arrange cutlets on serving plates and top with browned onions. Serve with black beans and rice and garnish with cilantro leaves and lime wedges."
                    },
                    "image": "https://www.seriouseats.com/thmb/DC1TX6nJw6Hu99BRHMp3fpJI3O4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__04__20200416-cuban-pollo-a-la-plancha-aaron-hutcherson-10-08b809c2c1c44ae2a89bc4fea9cdb717.jpg "
                },
                {
                    "id": "6",
                    "location": "Caribbean",
                    "Title": "Jamaican Peas and Rice ",
                    "description": " The flavor of Jamaican rice and peas is the other unforgettable trait. A subtle, slightly sweet coconut aroma encompasses every bite; this, combined with Jamaica’s essential quintet of seasonings—Scotch bonnet, thyme, scallion, ginger, and garlic—adds up to a memorable addition to any meal.",
                    "Prep Time": {
                        "0": "Prep 10 minutes ",
                        "1": " Cook 110 minutes",
                        "2": " Soaking Time 8 hours",
                        "3": "Total time required= 10 hours"
                    },
                    " Serves": "6 to 8 servings",
                    "Rating": " 5 stars",
                    "Nutrition facts (per serving)": [
                        "247 calories",
                        "10g Fat",
                        "34g Carbs",
                        "7g Protein"
                    ],
                    "Ingredients": [
                        "150g dried Kidney Beans",
                        "3 Medium Garlic Cloves",
                        "355ml Coconut milk",
                        "28g peeled Fresh Ginger",
                        "4 Scallions , root endds trimmmed",
                        "5 sprigs of Fresh Thyme",
                        "1 Whole SCottch Bonnet Pepper ",
                        "6 Pimento seeds",
                        "Freshly ground Black Pepper",
                        "3 cups Long Grain rice"
                    ],
                    "Recipe": {
                        "1": " In a large bowl, cover peas with cold water by at least 2 inches and let stand at least 8 and up to 12 hours.",
                        "2": " Drain beans and transfer to a large pot along with garlic and the salt. Cover with 5 cups (1.2L) cold water and bring to a boil over high heat. Cook until beans are just tender, about 45 minutes.",
                        "3": " Add coconut milk, ginger (if using), scallions, thyme, Scotch bonnet pepper, and allspice seeds. Season with pepper. Return to a boil, then lower heat to a simmer and cook for 20 minutes.",
                        "4": " Add rice and stir once to distribute. Cover, lower heat to low, and cook until all water is absorbed and rice is fully cooked, 20 minutes or following the cooking time on rice package directions. Without lifting the lid, let rice continue to steam, covered, for 15 minutes.",
                        "5": "Fluff rice and discard Scotch bonnet pepper, thyme sprigs, and scallions, if you can find them (it's also okay to leave some of these in the pot, we often do, allowing diners to pluck them out at the table). Serve directly from the pot or transfer to a serving dish; note that it's okay if the rice crisps on the bottom of the pot, in Jamaica this crispy bottom is called bun bun, and it is often desired."
                    },
                    "image": " https://www.seriouseats.com/thmb/UNDZ36rWbrRICx6zKAr7Ji_v3GQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230228-SEA-JamaicanPeasand-Rice-VickyWasik-hero-ed91767bed4d487786ea7f0dbf8fe532.jpg"
                },
                {
                    "id": "7",
                    "location": "Asia",
                    "Title": "Garlic Fried Rice",
                     "description":"Oily garlic fried rice is the perfect complement to chicken adobo, but it's also a great side dish in its own right. In this recipe, we've chosen to include an additional step in which the oil used to fry the rice is infused with garlic beforehand, after which the garlic bits are strained out and added back to the rice at the end. This process prevents the garlic from burning, which can give the rice an unpleasantly bitter taste.",
                     "Prep Time":"10 minutes",
                     " Serves":"4 servings",
                      "Rating":"4 stars",
                      "Nutrition facts (per serving)":[
                       "267 Calories",
                       "4g Fat",
                       "51g Carbs",
                       "5g Protein"
                      ],
                      "Ingredients":[
                     "75ml Canola oil",
                     "8 Garlic Cloves",
                      "4 Cups cooked white rice"
                      ],
                      "Recipe":{
                       "1":" In a small saucepan, heat oil over medium heat until shimmering. Add garlic and cook, stirring constantly, until garlic softens, becomes very aromatic, and turns lightly golden, 30 seconds to 1 minute. Strain oil through a fine-mesh strainer directly into a wok; reserve cooked garlic and set aside.",
                       "2":"Heat wok over high heat until oil is shimmering. Add rice, breaking up larger clumps with a spatula and tossing to coat with garlic-flavored oil. Cook, stirring and tossing frequently, until no clumps of rice remain and rice is warmed through, about 4 minutes. Add reserved garlic to rice and toss to combine. Serve immediately."
                      },
                      "image":"https://www.seriouseats.com/thmb/EPuXhVvp0P9fgWQDzvAKi6uHJEM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__10__20191023-chicken-adobo-vicky-wasik-22-80a92e45ce4941e4b114e28882aadadb.jpg"
                },
                {
                    "id": "8",
                    "location": "Asia",
                    "Title":"Nasi Lemak(Malaysian Coconut Rice)",
                     "description":"While frequently served with toppings and condiments, at its most basic, nasi lemak is rice cooked in coconut milk.Cooking rice in coconut milk is common among communities that live around the equator, including the region of Southeast Asia of which Malaysia is a part. Coconut milk is one of the easiest ways to add flavor, richness, and additional nutrients to what would otherwise be a plain bowl of rice.",
                    "Prep time":{
                        "0":"Prep 15 minutes",
                        "1":"Cook 50 minutes",
                        "2":"Total time required =65 minutes"
                    },
                    " Serves": "6 servings",
                    "Rating":"5 stars",
                    "Nutrition facts (per serving)":[
                     "175 Calories",
                     "7g Fat",
                     "25g Carbs",
                     "3g Protein"
                    ],
                    "Ingredients":[
                    "Two and a half cups jasmine rice",
                    "200 ml Coconut milk",
                    "2 Pandan leaves, cut crosswise into 2-inch pieces",
                    "One 1-inch knob fresh peeled Ginger",
                    "One and half Teaspoons Diamond Crystal kosher salt"
                    ],
                    "Recipe":{
                      "1":" Set up a tiered steamer (see notes), filling the bottom section with about 3 inches of water. Bring to a boil over high heat. Line the steamer tier with cheesecloth.",
                       "2":"Meanwhile, place the rice in a strainer and rinse the grains under running water until the water is almost clear. Drain rice, then transfer to a 10-inch nonstick skillet and add the coconut milk, 7 ounces (200ml) water, pandan leaves, ginger, and salt. Cook on medium heat, stirring continuously, until it thickens like rice pudding, 8-10 minutes.",
                       "3":" Transfer the rice mixture to the cheesecloth-lined steamer tier and spread it in a roughly even layer. Set steamer tier over bottom section of boiling water, cover, and steam over medium heat until the grains are fully cooked, about 45 minutes; start checking rice doneness after 35 minutes of steaming. Once the rice reaches your preferred texture, turn off the heat and leave it to continue steaming, covered, until the steaming stops. The rice should be just cooked, with separate grains and a rich flavor of coconut.",
                       "4":"Serve with sambal tumis and other nasi lemak accompaniments, depending on your preference (note that it's typical to leave the pandan leaves in the nasi lemak, as it's understood they will be removed at the table by the diner; do not eat them). If desired, nasi lemak can be served on a banana leaf, which will contribute its own fragrance to the dish as the rice and toppings are eaten."
                    },
                    "image":"https://www.seriouseats.com/thmb/oBpvfjweNw7hHn5meqo6gpFF6Z0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230309-NasiLemak-MichelleYip-Option1-8d0b9468c998495f91ef4ff6d3b5ab6b.jpg"
                },
                {
                    "id": "9",
                    "location": "Asia",
                    "Title":"Lamb Biryani With Saffron ,Yoghurt and Caramelized Onions",
                    "description":"Biryani is a South Asian one-pot dish in which lamb, mutton, beef, chicken, seafood, or a mixture of vegetables is layered with rice.",
                    "Prep time":{
                        "0":"Prep 5 minutes",
                        "1":"Cook 2 hours 5minutes",
                        "2":"Active 90 minutes",
                        "3":"Marinating time 8 hours",
                        "4":"Total time required = 10 hours 10 minutes"
                    },
                    " Serves": "4 to 6servings",
                    "Rating":"5 stars",
                    "Nutrition facts (per serving)":[
                     "581 Calories",
                     "31g Fat",
                     "40g Carbs",
                     "35g Protein"
                    ],
                    "Ingredients":[
                      "910g Boneless leg of lamb,trimmed of excess fat and cut into 1-inch cubes",
                      "1 Cup plain unsweetened full-fat yoghurt",
                      "6 Medium Garlic Cloves",
                      "One 2-inch piece fresh Ginger",
                      "3 Teaspoons Diamond Crystal kosher salt",
                      "70ml ghee",
                      "2 Large Yellow or white onions,sliced thinly",
                      "5 green Cardamom pods,lightly cracked",
                      "1 Cinammon stick",
                      "4 Cloves",
                      "2 Dried Bay leaves",
                      "1 Teaspoon Garam masala",
                      "1 Teaspoon ground Kashmiri chile",
                      "Half teaspoon ground Mace",
                      "Half teaspoon ground Turmeric",
                      "240ml water or low-sodium stock(lamb,beef,chicken)",
                      "400g Basmati rice",
                      "60ml Fresh Lemon",
                      "1 bunch fresh Cilantro leaves",
                      "1 bunch fresh mint leaves ,chopped",
                      "1 fresh green chile",
                      "60ml Whole milk",
                      "20 Strands of Saffron",
                      "2 Teaspoons rosewater",
                       "2 teaspoons pandan water"
                     ],
                     "Recipe":{
                      "1":"Place lamb in a 1 gallon (3.8L) zip-top bag. In a medium bowl, mix yogurt, garlic, ginger, and 1 1/2 teaspoons salt until combined, pour yogurt mixture over lamb, seal bag, and shake bag to coat lamb well. Leave zip-top bag in refrigerator to marinate overnight.",
                      "2":"Heat 1/4 cup (60ml) ghee or oil in a Dutch oven or saucepan with a heavy bottom over medium heat. Add onions, season with a pinch of salt, and cook, stirring occasionally, until onions caramelize and turn dark brown (but not black), about 25 to 30 minutes.",
                      "3":"Reduce heat to low. Remove half of the caramelized onions and reserve to use as garnish for biryani. Add 3 green cardamom pods, cinnamon, cloves, bay leaves, garam masala, Kashmiri chile, mace, and turmeric, and sauté just until spices become fragrant, 30 to 45 seconds. Add lamb along with yogurt marinade, water or stock, cilantro, mint, and green chile. Stir to mix well, increase heat to medium-high, and bring liquid to a boil. Reduce heat to low, cover with lid, and cook for 30 to 45 minutes, stirring occasionally, until lamb is completely tender.",
                      "4":"Meanwhile, as lamb cooks, prepare rice. Pick over rice for any debris, then place it in a fine-mesh strainer and rinse under cold running water, until runoff is no longer cloudy; drain well. Place rice in a bowl and cover with 4 cups (960ml) water and let stand for 30 minutes. Strain rice, discarding soaking water. In a large saucepan, combine rice with 4 cups cold water, lemon juice, remaining 1 1/2 teaspoons kosher salt, remaining 2 green cardamom pods, and remaining 2 teaspoons of ghee or oil and bring to a boil over medium heat. Boil for 2 minutes and then strain rice; discard cooking water. It will be partially cooked—if you break a grain of rice, you will see an outer translucent ring and a tiny, opaque inner ring.",
                      "5":"When lamb is tender, remove lid and increase heat to medium, stirring often to prevent scorching, and cook until liquid starts to thicken and reduces to about 1 1/2 cups (360ml), about 5 minutes. Remove from heat. Using a clean, large wooden spoon or spatula, spread rice out in an even layer over meat in Dutch oven.",
                       "6":"Set oven rack at the middle position and heat oven to 350°F (180°C). Place half the saffron threads in a mortar and pestle and grind to a fine powder. In a small saucepan placed over low heat, warm milk just until it starts to bubble, then turn off heat. Add ground saffron and remaining saffron strands to hot milk and let steep for 10 minutes.",
                       "7":"Sprinkle saffron-infused milk over rice, followed by rosewater and pandan water. Garnish top of the rice with reserved caramelized onions. Cover Dutch oven with two sheets of aluminum foil and crimp overhang to form tight seal, place lid over foil, and place Dutch oven in preheated oven for 20 minutes to let rice steam. Remove from oven and let stand for 5 minutes. Uncover pot and carefully peel off aluminum seal. Use a fork to loosen rice a little and serve immediately straight from Dutch oven. Alternatively, biryani can be transferred to a platter and served."
                     },
                      "image":" https://www.seriouseats.com/thmb/SoA1f3OlKMHLeEA-EhgoVYgv8kY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lamb-biryani-hero-01-SEA-QIAi-hero-bc09dcc1348f4876bdd2fa1e1a5f918c.JPG"
                    }
                ];
            

        
        // Add more cuisine objects as needed
    
    let titleToSearch=cuisines.Title;
    let titleToSearch1= "Hearts of Palm Salsa";
    const locationToSearch = "Central America";
    const results = searchCuisine(cuisines, titleToSearch, locationToSearch);
    
    if (results.length > 0) {
        console.log("Found cuisine(s) matching the search criteria:");
        for (const result of results) {
            console.log(result);
        }
    } else {
        console.log("No cuisine found matching the search criteria.");
    }
    
    function searchAndDisplayCuisine(cuisines, title, location) {
        const results = [];
        for (const cuisine of cuisines) {
            if ((!title || cuisine.Title.toLowerCase() === title.toLowerCase()) &&
                (!location || cuisine.location.toLowerCase() === location.toLowerCase())) {
                results.push(cuisine);
            }
        }
    
        if (results.length > 0) {
            console.log("Found cuisine(s) matching the search criteria:");
            for (const result of results) {
                console.log("Title:", result.Title);
                console.log("Location:", result.location);
                console.log("Description:", result.Description);
                // Add display of other properties as needed
                console.log("---------------------------------------");
            }
        } else {
            console.log("No cuisine found matching the search criteria.");
        }
    }
    
    // Example usage:
    const cuisines2 = [
        {
            "id": "1",
            "location": "Central America",
            "Title": "Hearts of Palm Salsa",
            "Description": "This fresh and tangy salsa...",
            // Add other properties as needed
        },
        // Add more cuisine objects as needed
    ];
    
    const titleToSearch2= "Hearts of Palm Salsa";
    const locationToSearch2= "Central America";
    searchAndDisplayCuisine(cuisines, titleToSearch, locationToSearch);
    