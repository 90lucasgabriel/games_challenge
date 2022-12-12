import FormatDate from 'shared/helpers/types/FormatDate';

const formatDate = ({ value }: FormatDate): string => {
  try {
    if (!value) {
      return '-';
    }

    const date = new Date(value);
    date.setDate(date.getDate() + 1);

    const formattedDate = Intl.DateTimeFormat('pt-BR').format(date);

    return formattedDate;
  } catch (error) {
    return '-';
  }
};

export default formatDate;
