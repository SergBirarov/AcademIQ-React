import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${theme.breakpoints.down('sm')}`]: {
        fontSize: '12px',
    },
    padding: '8px'
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function ListComponent({ items, userType }) { 
    return (
        <TableContainer sx={{ width: "50vw" }} component={Paper}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {userType === 'Lecturer' && (
                            <StyledTableCell align="right">
                                <Typography variant="subtitle1" fontWeight="bold">
                                    תאריך התחלה
                                </Typography>
                            </StyledTableCell>
                        )}
                        {userType === 'Student' && (
                            <>
                                <StyledTableCell align="right">
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        תאריך רישום
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        שנה לימודים
                                    </Typography>
                                </StyledTableCell>
                            </>
                        )}
                        {userType === 'Lecturer' && (
                            <StyledTableCell align="right">
                                <Typography variant="subtitle1" fontWeight="bold">
                                    תואר אקדמי
                                </Typography>
                            </StyledTableCell>
                        )}
                        <StyledTableCell align="right">
                            <Typography variant="subtitle1" fontWeight="bold">
                                כתובת
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Typography variant="subtitle1" fontWeight="bold">
                                טלפון
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Typography variant="subtitle1" fontWeight="bold">
                                דואר אלקטרוני
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Typography variant="subtitle1" fontWeight="bold">
                                שם
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Typography variant="subtitle1" fontWeight="bold">
                                תמונה
                            </Typography>
                        </StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item, index) => (
                        <StyledTableRow key={index}>
                            {userType === 'Lecturer' && (
                                <StyledTableCell align="right">
                                    <Typography variant="body2">
                                        {item.start_Date}
                                    </Typography>
                                </StyledTableCell>
                            )}
                            {userType === 'Student' && (
                                <>
                                    <StyledTableCell align="right">
                                        <Typography variant="body2">
                                            {item.enrollment}
                                        </Typography>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Typography variant="body2">
                                            {item.school_Year}
                                        </Typography>
                                    </StyledTableCell>
                                </>
                            )}
                            {userType === 'Lecturer' && (
                                <StyledTableCell align="right">
                                    <Typography variant="body2">
                                        {item.academic_Degree}
                                    </Typography>
                                </StyledTableCell>
                            )}
                            <StyledTableCell align="right">
                                <Typography variant="body2">
                                    {item.address}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Typography variant="body2">
                                    {item.phone}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Typography variant="body2">
                                    {item.email}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography variant="body2" align="right">
                                    {item.firstName} {item.lastName}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell align="right" sx={{ paddingRight: 0 }}>
                                <Avatar alt="Remy Sharp" src={item.picture_URL} />
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListComponent;