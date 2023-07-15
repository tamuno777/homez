import React from 'react'
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import products from '../propertiesdata/Data';
import { Col, Row } from 'react-bootstrap';

const List = styled('ul')({
  listStyle: 'none',
  padding: '10px',
  margin: 0,
  display: 'flex',
  // borderRadius:'10px'
});
export default function Properties() {
  const { items } = usePagination({
    count: 3,
  });

 
  // console.log(products)
  return (
    <div style={{backgroundColor:'#F5F5F5'}} className='pb-5'>
      
      <div className="properties-content p-3">
        <div className='d-flex justify-content-between props px-5'>
              <p>List Of Properties</p>
              <button>View Properties</button>
        </div>
        <Row className="first-set-prop d-flex jusify-content-between ps-3">
        {products?.map((product) => (
          <Col key={product.id} sm={4}>
          <Card sx={{ maxWidth: 345 }} className='cards m-3'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={product.images}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='card-h'>
        {product.location}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='card-p'>
        {product.type}
        </Typography>
        <Typography variant="body3"  className='card-p2'>
        ${product.price}/month
        </Typography>
      </CardContent>
      <CardActions>
        {/* <div size="small">Share</div>
        <div size="small">Learn More</div> */}
         <div style={{ display: "flex", alignItems: "center",width:"100%",borderTop:'1px solid gray', borderRadius:'5px'}} className='justify-content-between d-flex  p-2'>
          <div className='text-center mx-2 px-4' style={{border:'1px gray'}}>{product.bedroom}</div>
          <div className='text-center  px-4' >{product.toilet}</div>
          <div className='text-center px-4' >{product.extra}</div>
        </div>
      </CardActions>
    </Card>

          </Col>
          ))}
        </Row>
      </div>

      <nav style={{ display: "flex", justifyContent: "center", alignItems: "center",overflow:"hidden",border:"1px gray" }}>
      <Box sx={{ '& div': { m: 0} }}>
      <div className='d-flex nav-btn1  p-1'>
        <div className='nav-btn2'   size="small">First</div>
        <div className='d-flex justify-content-between'>
        <div className='nav-btn' size="small">1</div>
        <div className='nav-btn'  size="small">2</div>
        <div className='nav-btn'  size="small">3</div>
         
        </div>
        <div className='nav-btn3'  size="small">Next</div>
       
      </div>
    
    </Box>
              
         
    </nav>

    </div>
  )
}
