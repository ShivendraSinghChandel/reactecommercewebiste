import Button from 'react-bootstrap/Button'
import  Container  from 'react-bootstrap/Container';
const Blog=()=>{
    return(
        <>
        <Container>
          <h1>Our Blogs</h1>
          <div style={{marginTop:"50px"}}>
            <h3 style={{color:"blue"}}>1. Official League Blog</h3>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div><img src="https://i1.feedspot.com/200/5529788.jpg?t=1680154676" style={{width:"150px",height:"120px",marginRight:"15px"}} alt="" /></div>
              <div><p>The Official League Blog covers the latest news and developments in the world of professional sports leagues, including the NBA, NFL, and MLB. The blog offers analysis of games and players, as well as insights into league policies and rule changes.
                   <br /> Blog officialleague.co  <Button size='sm'> + Follow </Button> <br />
                   Facebook Followers 5.8K Twitter Followers 8.6K Instagram Followers 12.6K <br /> Frequency 3 posts / quarter Domain Authority 20</p></div>
            </div>
            <Button style={{marginLeft:"20px"}}>Get Email Contact</Button>
          </div>
          <div style={{marginTop:"50px"}}>
            <h3 style={{color:"blue"}}>2. Scottish Hat Blog</h3>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div><img src="https://i1.feedspot.com/200/5529793.jpg?t=1680154694" style={{width:"150px",height:"120px",marginRight:"15px"}} alt="" /></div>
              <div><p>The Scottish Hat Blog provides a glimpse into the rich history of Scottish hat-making, as well as current trends in Scottish fashion. The blog covers everything from traditional Tam o' Shanters and Balmorals to modern styles like the flat cap and the beanie.
                   <br /> Blog scottishhat.com  <Button size='sm'> + Follow </Button> <br />
                   Frequency 1 post / week Domain Authority 11</p></div>
            </div>
            <Button style={{marginLeft:"20px"}}>Get Email Contact</Button>
          </div>

          <div style={{marginTop:"50px"}}>
            <h3 style={{color:"blue"}}>3.  Hat Heaven Blog</h3>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div><img src="https://i1.feedspot.com/200/5508312.jpg?t=1676522708" style={{width:"150px",height:"120px",marginRight:"15px"}} alt="" /></div>
              <div><p>Established in 1986, Hat Heaven's approach to designing premium headwear is simple - pursue both new and traditional colorways with an ever-changing array of innovative materials. Our aim is to reflect current and future fashion trends onto our designs, pulling influences from streetwear, footwear, and pop culture. Combined with exemplary customer service, we hope to deliver a retail experience unlike any other.
                   <br /> Blog hatheaven.com  <Button size='sm'> + Follow </Button> <br />
                   Frequency 24 posts / month Domain Authority 26</p></div>
            </div>
            <Button style={{marginLeft:"20px"}}>Get Email Contact</Button>
          </div>

          <div style={{marginTop:"50px"}}>
            <h3 style={{color:"blue"}}>4.  Roxanns Hats Blog</h3>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div><img src="https://i1.feedspot.com/200/5529789.jpg?t=1680154682" style={{width:"150px",height:"120px",marginRight:"15px"}} alt="" /></div>
              <div><p>Roxanns Hats is a hat boutique that specializes in unique, one-of-a-kind hats for women. Their blog offers advice on how to choose the perfect hat for any occasion, as well as insights into the latest trends in women's fashion.
                   <br /> Blog roxannshats.com  <Button size='sm'> + Follow </Button> <br />
                   Facebook Followers 724 Twitter Followers 393 Instagram Followers 1.2K <br /> Frequency 1 post / quarter Domain Authority 24</p></div>
            </div>
            <Button style={{marginLeft:"20px"}}>Get Email Contact</Button>
          </div>

          <div style={{marginTop:"50px"}}>
            <h3 style={{color:"blue"}}>5.   Royal Hats Blog</h3>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div><img src="https://i1.feedspot.com/200/5508320.jpg?t=1676522677" style={{width:"150px",height:"120px",marginRight:"15px"}} alt="" /></div>
              <div><p>Royal Hats is true, about royal hats, but it is also about cheerleading and championing the traditions, skills, techniques, and new innovations of the millinery industry. This blog started like many other royal fandoms of fashion. While hats remain the focus, writing this blog has led me to a deep admiration and respect for the talented craftspeople who are milliners. I wish all of them could see one of their creations atop a royal head and bask in some public recognition of their work.
                   <br /> Blog royalhats.net <Button size='sm'> + Follow </Button> <br />
                   Frequency 13 posts / quarter Domain Authority 33</p></div>
            </div>
            <Button style={{marginLeft:"20px"}}>Get Email Contact</Button>
          </div>
          </Container>
        </>
    )
}

export default Blog;