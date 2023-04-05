import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react'

const ServiceItem = ({first_name,last_name, category, city, description,imgURL,id }) => {
  
  return (
    <Card
      sx={{
        margin: 1.5,
        width: 250,
        height: 350,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img
        height={"120px"}
        width={"120px"}
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASDxUSEhAVFRUVFxUVFRMWFRUVFRcVFRUXFxYXFhgYHSggGBolGxUVIjEhJikrLi4uGB8zODMsNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0vLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABHEAACAQEDCAYGBgcIAwEAAAAAAQIDBAURBhIhMUFRYYEiMnGRobEHE0JSctFigpKywcIUIyQzouHwJTRDU3OTs9JUY6NE/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQIBBv/EADARAAIBAgMFBwQCAwAAAAAAAAABAgMRBCExEkFhkdEFEzJRcbHwIoGhwULxM1Lh/9oADAMBAAIRAxEAPwDuIAAAAAAAAABB3vlFZ7PjFyz5/wCXDS18T1R56TmUlFXk7HUISm7RV2ThH2+9qFH95VjF+7j0uUVpZQryyrtVXQpeqj7sG87nPX3YEHtx2vW9r7SpPFr+KNGl2a3nUduC6/2Xq2Zb0lopUpz4yahH8X4IiK+Wlql1VTguEXJ97eHgVwFeWIqPeXoYKhH+N/X5b8EpVyitktdonyzY/dSNZ3taXrtFb/cn8zUBG5yerfMnVOC0iuSNxXtaf/Jrf7s/mZad/WuOq01ObzvvYkcDzal5vmHCD1S5E9Rywtsdc4T+KC/LgS1ky6/zaD7acsf4ZYeZSwSRr1FvIZ4SjLWPLL2Oo3flFZa2iNVKXuz6EuWOvkTBxZokLtvy00MPV1Hm+5LpQ5J6Y8sCxDGf7LkUqvZu+m/s+p1kFWujLGjUwjWXqpb28ab+t7PPvLPGSaxLkJxmrxZm1Kc6btNWPoAHRwAAAAAAAAAAAAAAADWtlrp0oOdSSjFa2/60vga183rSs1PPqPXojBdaT3JfjsObXve1W0zzpvQurBdWK4b3x8loIK1dU8tWW8NhJVs9I+f6RL35lbVqYwo406fvaqkl2+wuzT2aitYAGbOTm7yNylShSjswVgADk7AMFstlKksak1HcvafYlpZBWrKnZSpY/Sn/ANY/M6jCUtER1K0KfifUsgKTWv60y/xM3hGMV4vFmtK8rQ9dep9tryJFQlvZXeOhuT/HUvwKHG9bQtVepzk35mxSygtS9tS+KK/DBjuJBY2G9P8AHUuh6VijlVL26MXxjJx8Hj5m5TynoPXGpHlF+TOO6mtxLHFUn/LmTYIKtlRRXVhOT44RXnj4ENeN+VaycdEIPXGO34pbezQj2NKTOZ4unFZO/p10LrGSaTTxTSaa0pp6miVubKCvZmlF51PbTk9H1X7L8OBWsnlL9FpY7nh8Oc83wwPq0XtSjVhSTzpykotJ6I4vXJ7+BytpS+nVEknCdNd4snbJ+b/PI7Lc180bRDOpy0rrQeiUe1buK0Emcbs1onTmp05OMlqkvLiuB0LJrKKFpWZPCNZLTHZJLW4Y+K2F+hiFPKWvuZOKwTpfVDOPt/ziWIAFooAAAAAAAAAAj75vOnZqTqT7IxWuUtiXz2GzarTCnCU5vCMU23wRyy+70naazqS0RWiEPdj83t/kQV63drLUtYTDd9LPRa9DFeV4VK9R1Kjxb1Jaor3Y8DVPD0y73zZ9BFKKstAAeA9PW8NL0JaW3oSXF7CtXplJrjQ51GvuJ+b7jVyhvb1knTg/1cXpfvyX5U9W/XuIYs06KteRnV8W77MOfQ9qScpOUm23rbeLfM8ALBQAAAAAAAAAAAAMkrVUazXVm1qzXOWGG7DHA2rhpZ1qpLDU87lFN/I0Sx5LWdQjK0VGop9CDejb0mt+nBLsZxU+mLJqMduor+vIsp7Cbi1KLaaeKaeDTWpo+T0oI2WdHyXygVojmTwVaK07FNe9H8VsLEcas9aUJxnCWbKLxjJbH8tjW5nT8n72jaaKmtElonD3ZfJ60aWHr7f0y19zExuF7p7cdH+P73EsAC0UAAAAAROUd5/o9nlNdZ9GC3zeruWL5Hjaim2dRi5SUVqyq5b3v6yp+jwfQpvGb96eyPZHz7CrBt7Xi3pbett62wY85ucnJn0tGnGlBQj84gAHJ2CLyitvqqDweEp9BPal7T7tHNEoVDKuvnWhQ2U4pfWl0n4ZvcSUo3kiDEz2Kba9Pn2IZAAumOAAAAAAAAAAAAAAADau+EqlelFtvpRwxbeEYvF4blgmapaMl7scP101g5LCCetReuT3Y7OHaRzlsxuS0abqTS5lgYAKRtgkLgvSVmrqppzH0akVthv7VrXNbSPB6m07o5lBTi4y0Z2SnUUoqUXimk01qaelMylQyEvXOpuzyemHShxg3pX1W+5ot5r05qcVJHzdak6U3B7gADsiBzjLm8fWWj1afRpLDtnJJy7lgu8v1ttKpUp1JaoRcnyWOByGpUcpOUnjKTcpPjJ4vxZTxk7RUUaXZtK83N7v2fIAKBsAAAAoN7VM60VX9OS5J4LyL9DWc6tDxqTe+cvvMnw+rZSxz+mK4/o+AT+S+SNe2pzUlSop4OrJOWdJa1Tims7Da8UlxeKLrQ9GtiS6VWvN786EVySj+JPKpGLszOSbOVg6nX9GljfVrV4fWpyXc4ETbPRhVWLo2uEt0akJQf2ouXkeKrE9cWUIFgtmRF5U/wD8/rF71KcZruxUvAhLVZKtL97SqU/jpzh4tHd09DwxA+VUi/aXee5y3np4eg+fWx95d5uWW67TV/d2atPjGnNr7WGABqgs9gyAvCp1qcKK31ZrHlGGc+/AuNw+j+zUGp1pfpE1pSlFRpJ71DF531m1wOHUijpRbOTSXl5rFHQ7DLGjTe+EH/CiC9JNHNvOq/fjSn/81D8hMXQ8bPS/04eRDXd4plzBeKSNsAFc0QAADauq3OhXhVXsvpLfB6JLux54HW6c00mninpT3pnGjpGRVs9ZZIxb00m6b7Fpj/C0uRcwc7NxMztKleKqLdl0LCAC+ZBWcvbVmWTMWupOMeS6T+6lzOeFs9IlfGpSh7sZSf1mkvusqZl4mV6j4G/gIbNBPzu/nIAAgLYAAAhrOeRoSqVlTj1qlVU4/FOeavFnQ4ayp5G01K9rOn/nTl9iFSf5SfDu20Ucd/H7nZbHZIUacKVNYQpxUIrgtva9b4szgEZVAAAB7nPeeAAwVbHSl1qNOXxU4PzRhjdFlTxVloJ7/U0/+pugXFj4pUIR6lOEfhjGPkjI5PeeAAHh6eAHJfSpH+0Vxs9J/wAdVfgbtyf3Wl8CNf0rx/bqb32eC7qtX5mzcv8AdqXwIkqeCJYwf+SXzeboAIDQAAABafR9as20VKeycFJfFB/KT7irElkzXzLbRlvnmv66cfNo7pS2ZxfEhxMNulJcPbM6uADYPmzmmXFTG3SXuwhHwzvzECS2Vr/b6vbH/jgRJj1PHL1PpcOrUoLgva4ABwSgAACGsrOQj/tih8do/wCGsWuzUZTmowi3J6kv60LiVPIiP9s0FuqWjwoVkTUdJenUo41+FfNx2cAHBVAAAAAAAAAAAAAAAOW+lqP7XRe+h5VJfM2LpWFnpL/1w8Ua3pdn+1UeFBvvqS+RLO76lGnTU44Jwhg1pT6K0Y7+BJV8ESfBtd5I+AAQGiAAADJZambUhL3ZRl3STMZ8zehi9sz218jtYNL9I4g2Lny+xxOc5Wr9vq9sf+OBEk9lvTwtrfvQhLwzfykCZVVWnL1PosO70oei9gADglB42emWzQTqQT1OUU+xyR4elsuKwqjTTa6csHJ+Kj2LzOYZL0XTv+NNrTGtao8vVV2vDDvOvS1mnG7KCru0KjBVms11cOm1glpe/BJY68FgTwkopoxp3m9pm2egHB6AADwAAAAAAAAAAAA5X6WYOVtowWuVGMUt7lVmklzZ0+0WaMoOnJYxwS7lgmtzR82ixUZzhOdKE503jTnKEZSg98W1itS1bjOdOV0keRVncolqoOnOUHri8O3c+awZiJXKaKVox3wi33teSRFERr05bUUwAAdA+ZrQz6Mlnp504R96UY98kjx+R7e2Z1j1HAG6DbsfL7fAoXpEo4VqU/ehKP2Hj+cqZ0PL2zZ1kU1/hzjLk+i/vJ8jnhmYmNqj4m5gZ7VBLyuvnMAAgLYPYyaaa1pprtWk8ABfaVVTipx1SSa5n2VO5r39V0JpuD06NcW9bW9cCy2e1U5rGE4y4J6e7WjpO5mVKTg+BnAB6RAAAAAAAAAAAAAAA9APipUjFYykore2kvEhb1v1YOFF4t6HU1JL6O98QzqNOU9ERV+WhTtEmtUcIJ/Dr8cTRAODUjHZSSAAB6CSyaoZ9tox+nnP6icvwRGlo9H1lzrROpspwzV8U38ovvO6UdqaRDiJ7FKUuHvl72OggA2T5s1rfZlVpTpvVOLj3rWcgqQcW4yWEotxktzi8Gu9HaDm+XF3ertPrEujWWd2TjgpLnofNlLGQyUvI0uzalpOD3/r/hXgAUDYAAAB9UpuMlJa4tNdqeKPkAF8s9ZThGcdUlivlyMhWsmrfmv1Mnok8YcJbY8/PtLKdpmXVhsSsAACMAAAAAAAAAHiPSOvy3+qp4J9OeKjwW2XLzB1GLk7Ir9+2pVK7w6sOhHl1n349yNAIHBrKKikkAAAAAADpGRNi9XZFJrTVbqPseiPgk+ZQbssTr1oUl7bwb3RWmT7k/A61TpqKSSwSSSS2JakW8JC7cjM7Sq2iqa35/bcZQAaBkAiMpbt/SLPKCXTXSg/pLZzWK5kuDyUVJNM6jJxkpLVHFn2Yb09ae58QWfLe5vV1PXwXQqPp/RqPb2S8+0q5jzg4S2WfS0qsasFOPzgegA5OwAAAWe5b4VTCFR4T1KT0Kfyl5lYAOKlNVFZnQAVWwX7Up9Gf6yPF9NdktvPvJqz3zQn7ea90+j46vE6uUJ0Zx3EgD5jJNYppremmfR6QgAAAGraLxow61WPYnnPuREW3KN6qUMPpy18o/PuPLksKU5aIlrxvCFGOMtLfVgtb+S4lPtVplUm5zel9yWxLgjHUqSlJyk229belnhze5dpUVD1AABMAAAACQuK65WmuqaxUddSS2Q+b1Lv2HqTbsjyUlGLlLRFpyCuzNhKvJaZ9GHwJ6Xza7oreXAxUaajFRikkkkktSS0JGU16cFCKij5utVdWbm94AB2RAAAGva7NCrTlTmsYyWDXBnLb7uudmrOnLStcJ+9Hf2ravmjrRG31dNO00nTnoeuM9sZb1+K2levR7xXWqLeExPcyz8L16/NTk56bF4WGpQqOnUWEl3SWyUXtRrGZpkzfUk1dHoAAAAAAB5OaSbbwS1sHrdsyz5Kr9VP/U/LEmjntzZW+pk4ypZ1KTx0fvE8MMdOh7Ojo7S9WC3Uq8M+lNTjtw1p7pJ6YvgyzUw1Wik5r55GK8RTq1JODvmbBqXr/d6vwS8jZnJJOUmklpbbSSW9t6im5QZYwcZUrPHPT6MqssVHB61Ba38Tw4YnlKhUqu0F0OZVoUrOT68jTBis1eNSOMea2p8TIQSi4txas0bUZKaUou6ejPQAeHoAAAAEYttJJtt4JLS23qSW8A+qNOU5RhCLk5PCMVrbOn5O3RGy0c3HGctM5b5blwWpfzNLJXJ9WePrKiTrSXaoRfsrjvf9OymjhqGwtqWvsYmNxXePYjovy+nkAAWigAAAAAAAAARl9XRStNPMmsGtMZrrRe9cN62nNb1uyrZ6mZUWvqyXVmt6e/hrR101bbY6daDhUgpRex+a3PiV61BVM9GW8Ni5UcnmvmnzM5ACxX7kpVpYzpY1aevDXUiuKXWXFd20rNatGEc6T0eLe5cTPdOals2zNuFanKG2mrLV+Xr5fOF/tGGva6cNctO5aX/LmRNqvCc9C6Mdy182aZqUOym86rtwXXTknwZkV+2EsqMb8X+lk+dvQk617v2IpcXpfciLt1ac1jKTbWlbtHBaD0GnTw1Kl4I247+bzMitiq1b/JK/DRclkfMZYrHeZrPeE6E1UpzcJ6lm7eDT0SXBpo0oTceili03h2b2ZKdLDS3i9/yJdVYg0zN68Moa9qa9dPQtMacejTx3pbX248DWNejBSprHjp2rSHVcVhLXslv7TmCjCNkrI9k3KV2ZLPUlnuUZNYdFYPDtJOjes11kpeHlo8CMowwil/WkyHNSjTqL64p/PPUkpV6tF3pya9uWn4J6heVOW3Ne6Wnx1G2VYzWe1Th1Xo916fD5GdW7KWtJ/Z9evM1aHbMllWjfiumnK3oWMGtY7bGot0lrj+K3onLluKvaX0Fmw21ZLo/V959nejIlSnGew1n8+X0NqNenKn3iktnz+Z34amhQoznNQhFyk9UVrf8ALjqOg5M5Nxs6VSphKs1r9mCetQ472b9zXLRs0cILGT61R9aXyXBEqXqOHUPqlqZOKxrq/RDKP5fRcOYABaKAAAAAAAAAAAAAAAAKxlLkbZrZ0njSq7KkPzx1S8HxLOD1Np3QaurHEL6yJt1mxfq/XQXt0k5PD6VPrLliuJWlJPUfpQiL2ybsdp01qEZS99LNn9uODLMMTbxIglRW44IDpt4ei6m8XQtM4fRqRVRdiazWueJXrZ6OrxhjmxpVVszKmD7ppYPmTxrwe8idOS3FTwR6iWr5LXhDrWOr9WKnq+Bs1JXXaVrstddtGqvOJIpR8ziz8iOsvUXPzMjSetGSw3baHHBWau9L1Uaj/KSFDJy3T6tjr86cofewOdpW1PWmRgLNZcgbyn/gxp8alSK8I5zJ6wei2T017UlvjShp5Tn/ANTx1oLeeqnJ7jnbZJ3Lk9a7X+4otx/zZdGl9p9b6uLOt3XkTd9BpxoKcl7dX9Y8d6T6KfYkWNIgliv9VzJVQ82UXJz0dUaLVS0T9dUWlRWMaUX2a589HAvEIpLBLBLUlqPsFWUnJ3ZOkkrIAA8PQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeoAAAAAHgAAAAAAAAAAAAAAAAAB//Z"
        alt=""
       
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {first_name} {last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>{category}</h3>
          {city}
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ margin: "auto" }} size="small">
          View
        </Button>
      </CardActions>
    </Card>


  );
};

export default ServiceItem;