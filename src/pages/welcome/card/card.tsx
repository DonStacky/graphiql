import GitHubIcon from '@mui/icons-material/GitHub';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';
import { useLocalizer } from '../../../contexts/localization';

interface DeveloperCardProps {
  name: 'developerName1' | 'developerName2' | 'developerName3';
  gitLink: string;
  gitName: string;
  image: string;
  description: 'developerDescription1' | 'developerDescription2' | 'developerDescription3';
}

export const DeveloperCard = ({ name, gitLink, gitName, image, description }: DeveloperCardProps) => {
  const localize = useLocalizer();

  return (
    <Card
      sx={{
        maxWidth: '16em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CardMedia
        sx={{
          height: '10em',
          width: '10em',
          borderRadius: '50%',
          marginTop: '1em',
        }}
        image={image}
      />
      <CardContent>
        <Typography sx={{ textAlign: 'center', fontSize: '1em' }}>{localize(name)}</Typography>
        <Typography sx={{ textAlign: 'center', fontSize: '1em' }}>{localize('role')}</Typography>
        <MuiLink
          href={gitLink}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#AD7630',
            fontSize: '0.9em',
            transition: '0.3s',
            ':hover': {
              color: '#855B25',
            },
          }}
          underline="none"
        >
          <GitHubIcon fontSize="small" sx={{ mr: '0.5em' }} />
          {gitName}
        </MuiLink>
        <Typography sx={{ marginTop: '1em', fontSize: '0.9em' }}>{localize(description)}</Typography>
      </CardContent>
    </Card>
  );
};
