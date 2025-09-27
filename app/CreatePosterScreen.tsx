import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const posterTypes = [
  { label: 'Display', title: 'New Limited Edition', color: '#C7A16E' },
  { label: 'Promotion', title: 'Up to 50% Off', color: '#D9D9D9' },
  { label: 'Branding', title: "Editor's Choice", color: '#A7B3C7' },
  { label: 'Announcement', title: 'Join Us At Our Studio', color: '#B3E3F7' },
  { label: 'Birthday', title: 'Birthday Bash', color: '#F7C7B3' },
];

const sizes = ['1080 x 1920 px'];
const categories = ['Foods and beverage'];

export default function CreatePosterScreen() {
  const [selectedTab, setSelectedTab] = useState('Smart script');
  const [selectedType, setSelectedType] = useState(0);
  const [description, setDescription] = useState('');
  const [size, setSize] = useState(sizes[0]);
  const [category, setCategory] = useState(categories[0]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeBtn}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Smart script', 'Advanced script'].map((tab) => (
          <View key={tab} style={styles.tabWrapper}>
            <TouchableOpacity
              style={[styles.tab, selectedTab === tab && styles.tabActive]}
              onPress={() => setSelectedTab(tab)}>
              <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
            {selectedTab === tab && (
              <LinearGradient
                colors={['#00D4FF', '#5A67D8']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.tabGradient}
              />
            )}
          </View>
        ))}
      </View>

      {/* Content Area */}
      <View style={styles.contentArea}>
        {/* Question */}
        <Text style={styles.question}>What type of posters do you want to create?</Text>

        {/* Poster Types */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.posterTypes}
          contentContainerStyle={styles.posterTypesContent}>
          {posterTypes.map((type, idx) => (
            <TouchableOpacity
              key={type.label}
              style={[
                styles.posterTypeCard,
                selectedType === idx && styles.posterTypeCardActive,
                { backgroundColor: type.color },
              ]}
              onPress={() => setSelectedType(idx)}>
              <Text style={styles.posterTypeTitle}>{type.title}</Text>
              <View style={{ backgroundColor: type.color }}>
                <Text style={styles.posterTypeLabel}>{type.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Description Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting."
            placeholderTextColor={'#aaa'}
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>

        {/* Settings */}
        <View style={{ gap: 7 }}>
          <Text
            style={{
              color: '#aaa',
              fontSize: 14,
            }}>
            Settings
          </Text>

          <View style={styles.settings}>
            <View style={styles.settingRow}>
              <Text style={styles.settingLabel}>Size</Text>
              <TouchableOpacity style={styles.settingValue}>
                <Text style={styles.settingValueText}>{size}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={20} color="#aaa" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderBottomColor: '#aaa',
                borderBottomWidth: 0.4,
                marginBottom: 8,
                borderRadius: '100%',
              }}
            />

            <View style={styles.settingRow}>
              <Text style={styles.settingLabel}>Category</Text>
              <TouchableOpacity style={styles.settingValue}>
                <Text style={styles.settingValueText}>{category}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={20} color="#aaa" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Generate Button - Fixed at bottom */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.generateBtn}>
          <Text style={styles.generateText}>Generate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingHorizontal: 16,
  },
  contentArea: {
    flex: 1,
  },
  bottomContainer: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  closeBtn: {
    padding: 8,
  },
  closeText: {
    fontSize: 28,
    color: '#fff',
  },
  time: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'center',
    gap: 40,
  },
  tabWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    borderBottomColor: 'transparent',
  },
  tabGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
  },
  tabText: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  question: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  posterTypes: {
    flexDirection: 'row',
    marginBottom: 16,
    flexGrow: 0,
  },
  posterTypesContent: {
    alignItems: 'center',
  },
  posterTypeCard: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 6,
    padding: 0,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  posterTypeCardActive: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  posterTypeTitle: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  posterTypeLabel: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 3,
  },
  inputContainer: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 12,
    marginBottom: 26,
    marginTop: 8,
    height: 160,
  },
  textInput: {
    color: '#fff',
    fontSize: 16,
    minHeight: 60,
  },
  settings: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  settingLabel: {
    color: '#fff',
    fontSize: 16,
  },
  settingValue: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  settingValueText: {
    color: '#aaa',
  },
  generateBtn: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  generateText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  footerText: {
    color: '#aaa',
    fontSize: 14,
  },
});
