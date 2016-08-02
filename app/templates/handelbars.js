function cooktimeTemplate(){
  let template = `<div id="display-cooktime" class="row text-center">
    <h1>How much time you have to cook? </h1>

      {{#each recipeProfiles}}
      <div class="col-md-4">
        <a href="#" onclick="showProfiles(this);return false;" data-cookingTime = {{times}}><h1>{{range}}</h1></a>
         </div>
      {{/each}}

  </div>`
  return template
}

function profileTemplate(){
template = `
  <div id="display-profile" class="text-center">
    <!--<h1>Here are your recipes! </h1>-->
      {{#each recipeProfiles}}

        <div id={{api_id}} class="col-md-4 text-center clearfix">
          <div class="thumbnail">
          <img src={{profile_image}}>
          <div class="caption  text-left">
          <h4>{{recipeName}}</h4>
          <h5>{{sourceDisplayName}}</h5>
          <!--<h6>{{ingredients}}</h6>-->
          <p><a class="btn btn-default" onclick="$.fn.fullpage.moveTo(4,'slide{{api_id}}');" data-recipeid={{api_id}}>See More</a></p>
          </div>
        </div>
        </div>
      {{/each}}
  </div>
    `


return template
}


function fullDetailsTemplate(){

  template = `
  <div>
  <div class="slide row text-center " data-anchor="slide{{recipeDetail.apiId}}">
      <div class="row text center">
        <h2>{{recipeDetail.name}} </h2>
      </div>

     <div class="col-md-8 text-center clearfix">
        <img src = {{recipeDetail.image}}>
          
      <div class="col-md-4 text-center clearfix">
        <ul>{{recipeDetail.ingredientLines}} </ul>
      </div>
          
          <br>
      <div class="row force-to-bottom text-center">
        <div class="col-xs-12">
          <a class="btn btn-default" href="{{recipeDetail.source.sourceRecipeUrl}}"> <p> See Full Recipe </p> </a>
        </div>
      </div>
  </div>
  </div>
  </div>

      `
  return template
}

