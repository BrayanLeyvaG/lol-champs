import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export default function Cards({champList}) {
  return (

    <Container>
        <Grid container spacing={2}>
            {Object.values(champList).map(champ => (
            <Grid item xs={6} md={4} lg={3} key={champ.id}>
                <Card sx={{ maxWidth: 345}}>
                <CardMedia
                    component="img"
                    height="400"
                    image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`}
                    alt={champ.id}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        {champ.name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" textAlign="center">
                        {champ.title.charAt(0).toUpperCase() + champ.title
                        .slice(1)}
                    </Typography>
                    <Typography variant="body2" color="#9e9e9e" textAlign="center">
                        {champ.tags[0]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                        Attack: {champ.info.attack}  Defense: {champ.info.defense}  Magic: {champ.info.magic} 
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
    </Container>


  );
}
