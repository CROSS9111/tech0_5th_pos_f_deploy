import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

// describe('Page Component', () => {
//   it('特定（Tech0 STEP4 POSアプリ）というテキストが表示されている', () => {
//     render(<Page />);

//     expect(screen.getByText('Tech0 STEP4 POSアプリ')).toBeInTheDocument();
//   });
// });

describe('Page Component', () => {
  it('「Tech0 STEP4 POSアプリ」というテキストがページ上に存在しない', () => {
    render(<Page />);
    expect(screen.queryByText('Tech0 STEP4 POSアプリ')).toBeNull();
  });
});

describe('Page Component', () => {
  it('特定（最終発表お疲れ様でした！）というテキストが表示されている', () => {
    render(<Page />);
    expect(screen.getByText('最終発表お疲れ様でした！')).toBeInTheDocument();
  });
});