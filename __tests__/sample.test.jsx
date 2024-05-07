import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page Component', () => {
  it('特定（Tech0 STEP4 POSアプリ）というテキストが表示されている', () => {
    render(<Page />);

    // 「いいね」というテキストが初期から表示されていることを確認
    expect(screen.getByText('Tech0 STEP4 POSアプリ')).toBeInTheDocument();
  });
});