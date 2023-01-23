import Head from 'next/head'
import Image from 'next/image'
import HeaderComponent from '../components/Homepage/header-component'
import stylesHp from '../styles/Homepage/Homepage.module.css';
import {getAllHomepage} from "../lib/Homepage/homepage-lib";
import Homepage from "../types/Homepage/homepage-type";
import FooterComponent from '../components/Homepage/footer-component';
import RecipeComponent from '../components/Recipe/recipe-component';
import RecipeTeaserComponent from '../components/Recipe/recipeTeaser-component';

export async function getStaticProps({ preview = false}){
  const allHomepage = await getAllHomepage(preview);
  return{
      props: {allHomepage,  preview},
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, //in seconds
  }
  
}

type Props = {
  allHomepage: Homepage[];
}


const Homepage = ({allHomepage}: Props) => {
  const homepage = allHomepage[0];
  const recipes = allHomepage[0].recipes.results;


  return (
    <div className={stylesHp.container}>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={stylesHp.main}>
        <HeaderComponent 
          allHeaders={homepage.header}
        />
        
        <div className={stylesHp.HeroImage}>
            <img src={homepage.heroBanner?.results[0].fileUrl} />
        </div>

        <div className={stylesHp.boxedContainer}>
          <h1 className={stylesHp.title}>
            {homepage.recipeTitle}
          </h1>
          <p className={stylesHp.SectionDescription}>{homepage.recipeSectionText}</p>
        
          <RecipeTeaserComponent
            allRecipes={allHomepage[0].recipes}
          />
        </div>

      
        <FooterComponent
          allFooters={homepage.footer}
        />
        
        
      </main>

      
    </div>
  )
}
export default Homepage;
