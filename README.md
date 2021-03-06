<h1>Pokédex_project</h1>
<h2>Site URL https://pokedex-lore.netlify.com</h2>
<br/>
<h4>How to run it:</h4>

<p>If you have NPM Package installed in your PC, there is some basic instructions, so follow it as it is:</p>
<ul>
  <li>Open the Terminal and go to the main folder of the project <code>./'pokedex_project'</code>.</li>
  <li>On terminal, type <code>npm install --S</code> the line '--S' it's optional.</li>
  <li>After everything install, on terminal type <code>npm start</code>. After it, will open a new tab (or browser) with App running.</li>
  <li>Enjoy and test :)</li>
</ul>

<br/>
<hr/>
<br/>
<h2>Change Log</h2>
<br/>
<h4><code>v1.9.0</code></h4>

<p>All WebApp has been completed and now it's ready to deploy. There was many, many changes, since I focus on the logistic, there was some CSS files collisions and rendering issues that I did not considered, so, those changes are:</p>

<ol>
  <li>Pokémon list has a limit area to render, now it's exactly 151 pokémons for lookup and has an overflow.</li>
  <li>The pixel pokeballs has been re-estructured, due collisions at time to render in multiple screens.</li>
  <li>Unnessesary files has been deleted properly.</li>
  <li>A new pokédex design is now working just fine for mobile devices.</li>
  <li>Added more info to the pokédex, the version group.</li>
</ol>

<h4><code>v1.8.13</code></h4>

<p>WebApp it's now 90% responsive! there's just one aspect to change, the pokédex. As you may see, when you open it with the device toolbar, it's closed by default; it will be changed and create a new pokédex (it's the same, but some custom CSS styling will disappear).</p>

<h4><code>v1.8.0</code></h4>

<p><strong>Bug fixed!</strong> Now, the list will not re-rendered as the initial state, it has a new UX where tells that there's no match (err msg). The 'x' aside of the input it can be used to clear the input data.</p>

<strong>Working next:</strong>
<p>Well, there's not too much to add to the project, so, it can be considerable to add responsive UI/UX, but the most of the responsive aspects are practically done, just some fixes and also, the list! 20 pokémon are few for the pokédex.</p>

<h4><code>v1.7.90</code></h4>

<p> A filter has been added to the project. For now it can lookup by pokémon name. Also the search bar has been moved to the filter area.</p>

<strong>Working on bugs:</strong>
<p>If there is no results, the list render the initial state of it, so... Seeing the the posibilities to find a way out of it.</p>

<h4><code>v1.7.0</code></h4>

<p><strong>UI Bug fixed!</strong> Pokedex UI has been changed a bit in order to render well the pokémon info. All info has been positioned properly. Other minor UI fixes are done too. License is updated now.</p>

<h4><code>v1.6.81</code></h4>

<p>Pokedex Detailed info is now rendering on the Pokedex Modal alike. On the SPA, Changed many aspecs (talking about the files structures and functions) such as:</p>

<ol>
  <li>Pokemons.js moved to components, since did not made much sense having it as container; has been moved to the same area as individual Pokemon.js file.</li>
  <li>Pokedex.js has been splited in 2 different areas: PokedexData.js and Pokedex.js; Analizing if I need to split it more, due the extent of the JS file.</li>
  <li>Main functions, calls and <code>Axios.get()</code> has been moved to App.js, the main file, due the logistical of this SPA Pokédex Project.</li>
  <li>Addition to another <code>Axios.get()</code> for the pokédex, so it will render as it should, one specific pokémon.</li>
</ol>

<strong>Working on bugs:</strong>
<p>UI: Yes, the pokedex it's fine with the style, but when the info populates, it doesn't ocupy the correct area, so, some changes shall be done soon, also talking about the pokémon IMG, it's not well positioned, neither sized properly; There will be an improvement.</p>


<h4><code>v1.6.0</code></h4>

<p>Here's Pokédex! The pokédex UI/UX has been created; Pure styling and will be connected to the pokémon id, so it will show the stats of the clicked pokémon.</p>

<h4><code>v1.5.20</code></h4>

<p><strong>Bug fixed!</strong> Now the pokemon card list populates properly acordding the pokemon and evolution as his API has it. Added a JS Library, underscore.js for the sorting list and id! Now we can appreciate the right order with, the pokemon img and info.</p>

<h4><code>v1.5.12</code></h4>

<p>UI design changes on Pokemon card; Colorful and more styled.</p>

<strong>Working on bugs:</strong>
<p>Sorting the list! I still have some bugs with the main pokemon list, still pokemon images does not render according the name on the card; working on it (Charizard disguise as Raticate, haha).</p>

<h4><code>v1.5.0</code></h4>

<p>Pokemon card UI has been changed and some rendering has been completed, such as the Modal with the pokedex and re-structured (again) the files within the project.</p>

<p>At this moment I am working on the pokedex UI/UX and bugs; filters and search bar still pending.</p>

<strong>Working on bugs:</strong>

<p>There is clearly a list of pokemons but pokemons img are not appropiate to the pokemon card; working on it with the Axios.get() and rendering.</p>

<h4><code>v1.4.5</code></h4>

<p>There was a collission between the main content and Filters sections; it has been fixed.</p>

<strong>Working on bugs:</strong>

<p>There is an issue at the time to iterate all pokemons on the main section, but I'm fixing it through time to time, due nature complexibility of the Pokemon API.</p>

<h4><code>v1.4.0</code></h4>

<p>Made a mockup for the design and structure of this webapp. I decided to made a whole new UI/UX for the next version of my project. It has many areas, and, analytics (me, haha) is deciding if to add or remove some components/containers to the webapp. Right now it's just design and SOME interactions. Hope you like it.</p>

<h4><code>v1.3.7a</code></h4>

<p>Basic pokédex render has been made and some other changes, such:</p>

<ul>
<li>Paths & files has been re-structured to make more sense on the project.</li>
<li>There is one Pokémon rendering, but only for UI reference.</li>
</ul>

<h4><code>v1.3.1b</code></h4>

<p><strong>CSS Modules!</strong> I really like to use CSS Modules, so it has been added to the project and all files have already had that reference on the imports and code (of course).</p>

<h4><code>v1.3.1a</code></h4>

<p>Decided to update this webApp with React 16.8.4, using AXIOS respectively for the gets of the Pokemon API.</p>

<p>I started already to separate the whole project into differents files, paths and using a re-usable structure for this framework.</p>

<h4><code>v1.0.0</code><h4>

<p>A simple project that demostrate the use of Fetch API alone with ES6. This project execute a list of pokémons, exactly <code> 100 species of pokémon </code> that has a card designed details section once you click on the pokémon img.</p>

<ol>
  <strong>There is also 2 details:</strong>
  <li>
    It can be run on: <code>Xampp (Apache), Python 3.7 (<strong>python -m SimpleHTTPServer [port]</strong> executed on main  folder) & by clicking on index.html</code>
  </li>
  <li>By CORS security standars, on code I couldn't resolve the header req, so I installed <code> Access-Control-Allow-Origin</code> plugin on chrome and also mozilla firefox (dev & regular edition) in order to be running.</li>
</ol>
