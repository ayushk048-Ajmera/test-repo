import {
  Box,
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  areaInterface,
  cityInterface,
  dataArea,
  dataCity,
} from "../util/dataAddress";
import { Person, PersonInterface } from "../util/dataPersons";

const MaruGam = () => {
  const [cities, setCities] = useState<Array<cityInterface>>([]);
  const [areas, setAreas] = useState<Array<areaInterface>>([]);
  const [Persons, setPersons] = useState<PersonInterface[]>([]);
  const [FetchPersons, setFetchPersons] = useState<PersonInterface[]>([]);
  const [city, setCity] = useState<string>("");
  const [area, setArea] = useState<string>("");

  const handleCityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let c = event.target.value as string;
    setArea("");
    setCity(c);
  };
  const handleAreaChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let a = event.target.value as string;
    setArea(a);
  };

  useEffect(() => {
    setCities(dataCity);
    setPersons(Person);
    setFetchPersons(Person);
  }, []);

  useEffect(() => {
    const ps: PersonInterface[] = Person.filter(
      (p) => p.address.district === city
    );
    setFetchPersons(ps);
    const c: cityInterface | undefined = cities.find((c) => c.city == city);
    if (c) {
      const a: areaInterface[] = dataArea.filter((a) => a.cId === c.cId);
      setAreas(a);
    }
  }, [city]);

  useEffect(() => {
    if (area !== "") {
      const ps: PersonInterface[] = Person.filter(
        (p) => p.address.district === city && p.address.area === area
      );

      setFetchPersons(ps);
    }
  }, [area]);

  return (
    <Container>
      {/* <img src={logo} alt="React Logo" /> */}
      <FormControl>
        <InputLabel>City</InputLabel>
        <Select
          style={{ width: "300px" }}
          labelId="select City"
          margin="dense"
          displayEmpty
          value={city}
          onChange={handleCityChange}
        >
          {dataCity.map((city) => (
            <MenuItem key={city.cId} value={city.city}>
              {city.city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Area</InputLabel>
        <Select
          style={{ width: "300px" }}
          labelId="select Area"
          margin="dense"
          displayEmpty
          value={area}
          onChange={handleAreaChange}
        >
          {areas.map((a) => (
            <MenuItem key={a.aId} value={a.area}>
              {a.area}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box>
        {FetchPersons.length !== 0 ? (
          FetchPersons.map((p: PersonInterface) => {
            return (
              <Card key={p.id} style={{ margin: "10px 0 0 0 " }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{ textTransform: "capitalize" }}
                  >
                    {p.name.first_name} &nbsp;
                    {p.name.middle_name && p.name.middle_name.charAt(0)} &nbsp;
                    {p.name.last_name}
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Typography variant="h3">0 person found!.. </Typography>
        )}
      </Box>
    </Container>
  );
};

export default MaruGam;
