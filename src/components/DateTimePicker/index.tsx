import { Ionicons } from "@expo/vector-icons";
import { format, parse } from "date-fns";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { useTheme } from "styled-components/native";
import { obterDataHora } from "../../utils/obterDataHora";
import { Text } from "../Text";
import {
  ButtonClose,
  CenteredView,
  Container,
  Modal,
  ModalView,
} from "./styles";

interface DateTimePickerProps {
  onDateChange: (date: string) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ onDateChange }) => {
  const { Colors } = useTheme();
  const [visibleDatePicker, setVisibleDatePicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>(
    obterDataHora().dataAtualBR
  );
  const formatDate = (dateString: string): string => {
    const parsedDate = parse(dateString, "yyyy/MM/dd", new Date());
    const formattedDate = format(parsedDate, "dd/MM/yyyy");
    return formattedDate;
  };
  const DesformatDate = (dateString: string): string => {
    const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());
    const formattedDate = format(parsedDate, "yyyy/MM/dd");
    return formattedDate;
  };
  const handleVisibletDatePicker = () => {
    setVisibleDatePicker(!visibleDatePicker);
  };
  return (
    <>
      <Container onPress={handleVisibletDatePicker}>
        <Ionicons
          name="calendar-outline"
          size={18}
          color={Colors.Secondary[500]}
        />
        <Text>
          {selectedDate}
          <Text color={Colors.Textcolor[500]}>{" - "}data da Movimentação</Text>
        </Text>
      </Container>

      <Modal
        transparent={true}
        animationType="slide"
        visible={visibleDatePicker}
      >
        <CenteredView>
          <ModalView>
            <DatePicker
              mode="calendar"
              selected={DesformatDate(selectedDate)}
              onSelectedChange={(dateString: string) => {
                onDateChange(formatDate(dateString));
                setSelectedDate(formatDate(dateString));
              }}
              options={{
                backgroundColor: Colors.Dark[800],
                textHeaderColor: Colors.Secondary[500],
                textDefaultColor: "#FFFFFF",
                selectedTextColor: "#FFF",
                mainColor: Colors.Secondary[500],
                textSecondaryColor: "#FFFFFF",
                borderColor: "rgba(122, 146, 165, 0.1)",
              }}
            />

            <ButtonClose onPress={handleVisibletDatePicker}>
              <Text>Fechar</Text>
            </ButtonClose>
          </ModalView>
        </CenteredView>
      </Modal>
    </>
  );
};

export { DateTimePicker };
