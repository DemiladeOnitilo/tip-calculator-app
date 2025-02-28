// import { render, screen, fireEvent } from '@testing-library/react';
// import { describe, it, expect, vi } from 'vitest';
// import Calculator from '../../components/Calculator';

// // Mock function to capture calculations
// const setCalculatedMock = vi.fn();

// describe('Calculator Component', () => {
//   beforeEach(() => {
//     vi.clearAllMocks(); // Reset mock function before each test
//   });

//   it('should not calculate if bill or number of people is empty', () => {
//     render(<Calculator setCalculated={setCalculatedMock} />);

//     fireEvent.submit(screen.getByRole('form'));

//     expect(setCalculatedMock).toHaveBeenCalledWith({ tipAmount: 0, totalAmount: 0, totalOverall: 0 });
//   });

//   it('should calculate the correct tip and total per person with a preset tip', () => {
//     render(<Calculator setCalculated={setCalculatedMock} />);

//     fireEvent.change(screen.getByLabelText(/bill/i), { target: { value: '100' } });
//     fireEvent.change(screen.getByLabelText(/number of people/i), { target: { value: '4' } });
//     fireEvent.click(screen.getByText('10%'));

//     fireEvent.submit(screen.getByRole('form'));

//     expect(setCalculatedMock).toHaveBeenCalledWith({
//       tipAmount: 2.5, // (100 * 0.1) / 4
//       totalAmount: 25, // 100 / 4
//       totalOverall: 110, // 100 + (100 * 0.1)
//     });
//   });

//   it('should calculate the correct tip and total per person with a custom tip', () => {
//     render(<Calculator setCalculated={setCalculatedMock} />);

//     fireEvent.change(screen.getByLabelText(/bill/i), { target: { value: '100' } });
//     fireEvent.change(screen.getByLabelText(/number of people/i), { target: { value: '4' } });
//     fireEvent.change(screen.getByPlaceholderText(/custom/i), { target: { value: '20' } });

//     fireEvent.submit(screen.getByRole('form'));

//     expect(setCalculatedMock).toHaveBeenCalledWith({
//       tipAmount: 5, // (100 * 0.2) / 4
//       totalAmount: 25, // 100 / 4
//       totalOverall: 120, // 100 + (100 * 0.2)
//     });
//   });
// });




// import { render, screen, waitFor } from '@testing-library/react';
// import { expect, describe, it, vi, beforeEach, afterEach } from 'vitest';
// import userEvent from '@testing-library/user-event';
// import Calculator from '../../components/Calculator'

//     describe('Calculator', () => {

//     let setCalculatedMock;

//     beforeEach(() => {
//         setCalculatedMock = vi.fn();
//         render(<Calculator setCalculated={setCalculatedMock} />);
//     });

//     afterEach(() => {
//         vi.clearAllMocks();
//     });

//     it('should calculate selected values', async () => {
//         const bill = screen.getByLabelText('Bill').value 
//         expect(bill).toBe('')
//         const people = screen.getByLabelText('Number of people').value
//         expect(people).toBe('')
        

//         await userEvent.type(screen.getByLabelText('Bill'), '100');
//         await userEvent.type(screen.getByLabelText('Number of people'), '4');
//         await userEvent.click(screen.getByText('10%'));

//         await waitFor(() => {
//             console.log(setCalculatedMock.mock.calls);
//                     expect(setCalculatedMock).toHaveBeenCalledWith({
//                         tipAmount: 2.5,     
//                         totalAmount: 25.0,  
//                     });
//                 });
//     })
//     it('should calculate selected values', async () => {
//         const bill = screen.getByLabelText('Bill').value 
//         expect(bill).toBe('')
//         const people = screen.getByLabelText('Number of people').value
//         expect(people).toBe('')
//         const custom = screen.getByPlaceholderText('Custom').value
//         expect(custom).toBe('')
        

//         await userEvent.type(screen.getByLabelText('Bill'), '100');
//         await userEvent.type(screen.getByLabelText('Number of people'), '4');
//         await userEvent.type(screen.getByPlaceholderText('Custom'), '12{Enter}');

//         await waitFor(() => {
//                         expect(setCalculatedMock).toHaveBeenCalledWith({
//                             tipAmount: 3.0,     
//                             totalAmount: 25.0,
//                         });
//                     });
//     })
// })

import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import Calculator from '../../components/Calculator'

const setCalculatedMock = vi.fn();

    describe('Calculator', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should calculate selected values when button is clicked', async () => {
        render(<Calculator setCalculated={setCalculatedMock} />);
        

        fireEvent.change(screen.getByLabelText('Bill'), { target: { value: '100' } });
        fireEvent.change(screen.getByLabelText('Number of people'), { target: { value: '4' } });
        fireEvent.click(screen.getByText('10%'));

        fireEvent.submit(screen.getByRole('form'));
        
        expect(setCalculatedMock).toHaveBeenCalledWith({
                  tipAmount: 2.5, // (100 * 0.1) / 4
                  totalAmount: 25, // 100 / 4
                  totalOverall: 110, // 100 + (100 * 0.1)
                });
    })
    it('should calculate selected values when custom value is inputted', () => {
        render(<Calculator setCalculated={setCalculatedMock} />);        

        fireEvent.change(screen.getByLabelText('Bill'), { target: { value: '100' } });
        fireEvent.change(screen.getByLabelText('Number of people'), { target: { value: '4' } });
        fireEvent.change(screen.getByPlaceholderText('Custom'), { target: { value: '20' } });

        fireEvent.submit(screen.getByRole('form'));

        expect(setCalculatedMock).toHaveBeenCalledWith({
                  tipAmount: 5, // (100 * 0.2) / 4
                  totalAmount: 25, // 100 / 4
                  totalOverall: 120, // 100 + (100 * 0.2)
                });
                    
    })
    it('should dislay error message when field is empty', async () => {
        render(<Calculator setCalculated={setCalculatedMock} />)

        fireEvent.submit(screen.getByRole("form"));

        const errors = await screen.findAllByText("Can't be zero");
        expect(errors.length).toBeGreaterThan(0);
    })
})

