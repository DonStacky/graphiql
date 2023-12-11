import {
  Box,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import './Welcome.scss';
import { DeveloperCard } from './card/card';
import { ourTeam } from './team-data';
import graphqlLogo from '/image/graphql.png';

export default function Welcome() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Box
        my="4rem"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            width: '31rem',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: '3.3rem',
          }}
        >
          Debugging your GraphQL server was never this easy!
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            width: '30rem',
            textAlign: 'center',
            fontWeight: 400,
            fontSize: '1.2rem',
            marginBottom: '1rem',
          }}
        >
          GraphiQL Client helps you debug GraphQL queries and implementations -
          taking care of the hard part so you can focus on actually getting
          things done.
        </Typography>
        <img src={graphqlLogo} alt="graphQL logo" className="graphql__logo" />
      </Box>
      <Divider
        sx={{
          ':before': { borderTop: 'thin solid #42a5f5' },
          ':after': { borderTop: 'thin solid #42a5f5' },
        }}
      >
        <Chip label="OUR TEAM" color="primary" variant="outlined" />
      </Divider>
      <Stack
        className="card-list"
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        margin="5rem 0"
        justifyContent="space-evenly"
      >
        {ourTeam.map((member, index) => {
          return (
            <DeveloperCard
              key={index}
              name={member.name}
              gitLink={member.gitLink}
              gitName={member.gitName}
              image={member.image}
              description={member.description}
            />
          );
        })}
      </Stack>
    </Container>
  );
}