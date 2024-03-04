import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:lats-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Michal",
    last_name: "Warstall",
    email: "mwarstall0@archive.org",
    gender: "Female",
    ip_address: "133.176.38.142",
  },
  {
    id: 2,
    first_name: "Harwilll",
    last_name: "Lurriman",
    email: "hlurriman1@nps.gov",
    gender: "Male",
    ip_address: "49.205.113.204",
  },
  {
    id: 3,
    first_name: "Franchot",
    last_name: "Mangenot",
    email: "fmangenot2@amazon.co.uk",
    gender: "Male",
    ip_address: "249.67.217.120",
  },
  {
    id: 4,
    first_name: "Shanta",
    last_name: "Bulbeck",
    email: "sbulbeck3@feedburner.com",
    gender: "Female",
    ip_address: "238.41.180.46",
  },
  {
    id: 5,
    first_name: "Cassi",
    last_name: "Pray",
    email: "cpray4@histats.com",
    gender: "Female",
    ip_address: "66.149.226.126",
  },
  {
    id: 6,
    first_name: "Averell",
    last_name: "Lethem",
    email: "alethem5@blinklist.com",
    gender: "Male",
    ip_address: "245.41.246.129",
  },
  {
    id: 7,
    first_name: "Sada",
    last_name: "Lickorish",
    email: "slickorish6@canalblog.com",
    gender: "Female",
    ip_address: "148.13.56.70",
  },
  {
    id: 8,
    first_name: "Randie",
    last_name: "Clulee",
    email: "rclulee7@hp.com",
    gender: "Male",
    ip_address: "198.25.9.197",
  },
  {
    id: 9,
    first_name: "Heda",
    last_name: "Marlor",
    email: "hmarlor8@scientificamerican.com",
    gender: "Female",
    ip_address: "75.241.119.57",
  },
  {
    id: 10,
    first_name: "Angel",
    last_name: "Bullar",
    email: "abullar9@engadget.com",
    gender: "Male",
    ip_address: "110.195.167.240",
  },
];
