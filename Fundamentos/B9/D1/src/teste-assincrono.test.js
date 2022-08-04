test('Não deveria passar!', () => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
      } catch (error) {
        done(error);
      }
    }, 500);
  });