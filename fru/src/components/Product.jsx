import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div> <br /><br /><br /><br />
      
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={5} md={4} key={product.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={product.image}
                title={product.title} 
                price={product.price}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title} 
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {product.description} 
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}><b>
                   Price : ${product.price}</b> 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
                
                <Button size="small">More Info</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
