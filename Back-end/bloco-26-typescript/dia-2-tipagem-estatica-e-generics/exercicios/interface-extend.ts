type slices = 8 | 6 | 4;

type common = 'Calabresa' | 'Frango' | 'Pepperoni';

type vegetarian = 'Marguerita' | 'Palmito' | 'Cogumelo';

type dessert = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface Pizza {
  slices: slices;
};

interface Common extends Pizza {
  flavor: common,
}

interface Vegetarian extends Pizza {
  flavor: vegetarian,
}

interface Dessert extends Pizza {
  flavor: dessert,
  slices: 4,
}

const calabresa: Common = {
  flavor: 'Calabresa',
  slices: 8,
}

const marguerita: Vegetarian = {
  flavor: 'Marguerita',
  slices: 6,
}

const nutela: Dessert = {
  flavor: 'Nutela',
  slices: 4,
}

