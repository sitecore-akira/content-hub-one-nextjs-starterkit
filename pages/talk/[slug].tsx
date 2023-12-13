import Talk, {TalkResults} from "../../types/Events/talk-type";
import {getTalkById,getAllTalksWithIds} from "../../lib/Events/talk-lib";
import stylesHp from '../../styles/Homepage/Homepage.module.css';
import Head from 'next/head'
import {getHomepageById} from "../../lib/Homepage/homepage-lib";
import { HOMEPAGE_ID } from "../../lib/Common/constants";
import Homepage from "../../types/Homepage/homepage-type";
import HeaderComponent from "../../components/Homepage/header-component";
import FooterComponent from "../../components/Homepage/footer-component";
import HeroBanner from "../../components/Homepage/hero-banner";
import RichText from "../../components/Common/richText-component";

const Renderer = require("prosemirror-to-html-js").Renderer;


type Params = {
    params: {
       slug: string;
    };
  };

  export async function getStaticProps({ params }: Params) {
    const recipe = await getTalkById(params.slug); 
    const homepage = await getHomepageById(HOMEPAGE_ID);   
  
    return {
        props: {talk,homepage},
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, //in seconds
    };
  }
  
  export async function getStaticPaths() {
    const allRecipePosts = await getAllTalksWithIds();

    return {
      paths: allRecipePosts.map(({ id }) => `/recipes/${id}`) ?? [],
      fallback: true,
    };
  }
  type Props = {
    recipe: Talk;
    homepage: Homepage;
  };

const Post = ({recipe,homepage}: Props) => {
    
    return (
        <div className={stylesHp.container}>
            <Head>
                <title>{talk?.Title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={stylesHp.main}>
                <HeaderComponent 
                    allHeaders={homepage.header}
                />
                <HeroBanner 
                  heroImageUrl={talk?.ImageList?.results[0].fileUrl}
                  altText=''
                />
                
                <div className={stylesHp.boxedContainer} >
                    <h1>{talk?.Title}</h1>
                    <p>
                      <strong>Duration:</strong> {talk?.Duration} min.<br/>
                    </p>
                    <p>
                      <strong>Ingredients:</strong> {talk?.Ingredients}
                    </p>

                    <RichText 
                      richText={talk?.preparationDescriptionRt} 
                    />
                </div>
                <FooterComponent
                    allFooters={homepage.footer}
                />
                
            </main>
        </div>
    )
};
export default Post;